import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../entity/Client';
import { Product, ProductType } from '../../entity/Product';

import { ClientService } from './../../services/client.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  productForm: FormGroup;
  buyForm: FormGroup;
  editingProduct: Product | null = null;
  productTypes: ProductType[] = Object.values(ProductType); // Initialisez productTypes avec les valeurs de l'énumération
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private ClientService: ClientService) {
    // Initialisation de productForm dans le constructeur
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      valueProduct: ['', Validators.required],
      valueEXC: ['', Validators.required],
      isAvailable: ['', Validators.required],
      productType: ['', Validators.required] // Ajoutez productType au formulaire

      // Ajoutez d'autres champs ici selon vos besoins
    });
    this.buyForm = this.formBuilder.group({
      clientId: [{ value: '', disabled: true }, Validators.required],
      clientName: [{ value: '', disabled: true }, Validators.required],
      netIncome: [{ value: '', disabled: true }, Validators.required],
      productId: [{ value: '', disabled: true }, Validators.required],
      productValue: [{ value: '', disabled: true }, Validators.required],
      periode: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    console.log('OnInit....');
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
  /*
  addProduct(): Observable<Product> {
    const partner = new Partner(
      this.productForm.value.partnerId,
      this.productForm.value.partnerName,
      this.productForm.value.partnerDescription,
      this.productForm.value.partnerType,
      this.productForm.value.partnerOwner,
      this.productForm.value.partnerIsAvailable
    );
  
    const newProduct = new Product(
      this.productForm.value.productId,
      this.productForm.value.productName,
      this.productForm.value.description,
      this.productForm.value.valueProduct,
      this.productForm.value.valueEXC,
      this.productForm.value.isAvailable,
      partner,
      this.productForm.value.productType,
      this.productForm.value.productOwner
    );
  
    this.productService.saveProduct(newProduct).subscribe(() => {
      console.log('Product added successfully');
      this.loadProducts(); // reload the products after a new one is added
      this.productForm.reset(); // reset the form
    }, (error: any) => {
      console.error('Error adding product:', error);
    });
  
    return this.productService.saveProduct(newProduct);
  }
*/
  addProduct(): void {
    const newProduct: Product = this.productForm.value as Product;
    this.productService.saveProduct(newProduct).subscribe(() => {
      this.loadProducts();
      this.productForm.reset();
    });
  }
  cancelEdit(): void {
    this.editingProduct = null;
    this.productForm.reset();
  }

  updateProduct(): void {
    if (this.editingProduct && this.productForm.valid) {
      const updateProduct = { ...this.editingProduct, ...this.productForm.value } as Product;
      this.productService.saveProduct(updateProduct).subscribe(() => {
        this.loadProducts();
        this.productForm.reset();
        this.editingProduct = null;
      });
    }
  }

  editProduct(product: Product): void {
    this.editingProduct = product;
    this.productForm.patchValue({
      productName: product.productName,
      description: product.description,
      valueProduct: product.valueProduct,
      valueEXC: product.valueEXC,
      isAvailable: product.isAvailable
      // Patchez d'autres champs ici selon vos besoins
    });
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      console.log('Product deleted successfully');
    }, error => {
      console.error('Error deleting product:', error);
    });
  }/*
  downloadProductReport(): void {
    this.productService.generateProductPDFReport().subscribe((blob: Blob) => {
      // Gérer le téléchargement du rapport PDF ici
    });
  }*/
  downloadProductReport(): void {
    this.productService.generateProductPDFReport().subscribe((blob: Blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Products.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
  buyProduct(formValue: any): void {
    const clientId = formValue.clientId;
    const productId = formValue.productId;
    const periode = formValue.periode;
    // ... Récupérez les autres valeurs du formulaire ici ...

    // Utilisez les valeurs du formulaire pour effectuer l'achat du produit
    this.productService.buyProduct(clientId, productId, periode).subscribe(() => {
      console.log('Product bought successfully');
    }, error => {
      console.error('Error buying product:', error);
    });
  }
  openBuyForm(product: Product, idClient: number): void {
    this.ClientService.getClientData(idClient).subscribe((client: Client) => {
      this.buyForm.setValue({
        clientId: client.idClient,
        clientName: client.ClientName,
        netIncome: client.NetIncome,
        productId: product.productId,
        productValue: product.valueEXC,
        periode: '',
      });
    });
  }

}
