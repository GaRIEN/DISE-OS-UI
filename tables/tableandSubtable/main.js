document.addEventListener("DOMContentLoaded", () => {
  const productController = new ProducController();
  productController.init();
});
class ProducController {
  constructor() {
    this.serviceProduct = new ProducService();
    this.uiProduct = new ProducUI();
    this.tbodyTable = document.getElementById("tbody-tableProducts");
    this.btnNewRow = document.getElementById("btn-newRow");
  }
  init() {
    this.btnNewRow.addEventListener("click", () => {
      this.addRow();
    });
  }
  addRow() {
    const id = `materiaPrima-${crypto.randomUUID()}`;
    const newtr = this.uiProduct.generateRow(id);
    const newsubRow = this.uiProduct.generateSubRow(id);
    this.tbodyTable.insertAdjacentHTML("beforeend", newtr);
    this.tbodyTable.insertAdjacentHTML("beforeend", newsubRow);
  }
}
class ProducService {
  constructor() {}
}
class ProducUI {
  generateRow(id) {
    return `
         <tr class="product-row" id="row-${id}">
                                <td><select name="">
                                        <option value="">leche</option>
                                        <option value="">Galleta Salada</option>
                                    </select>
                                </td>
                                <td><input type="text" class="descipcion"></td>
                                <td><input type="text" class="marca"></td>
                                <td><input type="text" class="modelo"></td>
                                <td><input type="text" class="presentacion"></td>
                                <td><input type="text" class="unidadMedida"></td>
                                <td><select name="" id="">
                                        <option value="">Gravado</option>
                                        <option value="">Exonerado</option>
                                    </select>
                                </td>
                                <td><select name="" id="">
                                        <option value="">Si</option>
                                        <option value="">No</option>
                                    </select>
                                </td>
                                <td>
                                    <div class="action-buttons">
                                        <button class="btn btn-sm btn-success btn-expand" data-bs-toggle="collapse"
                                            data-bs-target="#${id}">
                                            <i class="fas fa-list me-1"></i> Materia Prima
                                        </button>
                                        <button class="btn btn-sm btn-outline-primary">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
        `;
  }
  generateSubRow(id) {
    return `
    <tr class="expanded-details">
                                <td colspan="9" class="p-0 border-0">
                                    <div class="collapse" id="${id}">
                                        <div class="p-3">
                                            <h5 class="ingredients-header mb-0">
                                                <i class="fas fa-utensils me-2"></i>Ingredientes de Parrilla de res
                                            </h5>

                                            <!-- Formulario de agregar ingrediente -->
                                            <div class="form-section">
                                                <h6 class="mb-3"><i class="fas fa-plus-circle me-2"></i>Agregar nuevo
                                                    ingrediente</h6>
                                                <form class="row g-3">
                                                    <div class="col-md-3">
                                                        <label class="form-label">Categoría</label>
                                                        <select class="form-select">
                                                            <option>Vegetales</option>
                                                            <option>Carnes</option>
                                                            <option>Lácteos</option>
                                                            <option>Bebidas</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label class="form-label">Materia Prima</label>
                                                        <select class="form-select">
                                                            <option>Seleccione...</option>
                                                            <option>Papa huayro</option>
                                                            <option>Carne de res</option>
                                                            <option>Cebolla roja</option>
                                                            <option>Ají panca</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-2">
                                                        <label class="form-label">Consumo Estándar</label>
                                                        <input type="number" class="form-control" placeholder="Ej: 300">
                                                    </div>
                                                    <div class="col-md-2">
                                                        <label class="form-label">Costo Estimado</label>
                                                        <div class="input-group">
                                                            <span class="input-group-text">S/</span>
                                                            <input type="number" step="0.01" class="form-control"
                                                                placeholder="Ej: 12">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-2 d-flex align-items-end">
                                                        <button type="button" class="btn btn-primary w-100">
                                                            <i class="fas fa-plus me-1"></i> Agregar
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>

                                            <!-- Tabla de ingredientes -->
                                            <div class="table-responsive">
                                                <table class="table table-sm table-bordered ingredients-table">
                                                    <thead class="table-light">
                                                        <tr>
                                                            <th>Descripción</th>
                                                            <th>U.Med.</th>
                                                            <th>Consumo Estándar</th>
                                                            <th>Costo Estimado</th>
                                                            <th>Acciones</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Papa huayro</td>
                                                            <td>Gramos</td>
                                                            <td>300</td>
                                                            <td>S/ 12.00</td>
                                                            <td>
                                                                <button class="btn btn-sm btn-outline-danger">
                                                                    <i class="fas fa-trash"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Carne de res</td>
                                                            <td>Gramos</td>
                                                            <td>250</td>
                                                            <td>S/ 6.75</td>
                                                            <td>
                                                                <button class="btn btn-sm btn-outline-danger">
                                                                    <i class="fas fa-trash"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr class="highlight-total">
                                                            <td colspan="3" class="text-end">TOTAL</td>
                                                            <td colspan="2">S/ 18.75</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
    `;
  }
}
