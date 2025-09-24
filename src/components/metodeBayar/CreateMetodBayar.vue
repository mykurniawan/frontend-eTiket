<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Form Tambah Karyawan</h1>
                        </div>          
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card card-info">
                                <div class="card-header">
                                    <h3 class="card-title">Metode Bayar</h3>
                                </div>
                                <form @submit.prevent="tambah">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>ID / Kode</label>
                                            <input type="text" class="form-control" v-model="metodebayar.idMetodeBayar">
                                        </div>                                        
                                        <div class="form-group">
                                            <label>Jenis</label>
                                            <input type="text"  class="form-control" v-model="metodebayar.jenis">
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary">Tambahkan Metode</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            metodebayar : {}
        }
    },
     created(){
        this.tambahmetodebayar();
     },
     methods : 
     {
        tambah(){  
            this.tambah_data();
        },
        tambah_data()
        {    
            axios.post('http://localhost:8000/api/tambahmetodebayar', this.metodebayar)
            .then(({data})=>
            {
                alert("Berhasil Tambah ");``
                this.$router.push('/metodebayar');
                this.metodebayar = data;
            })
        }
    }
}
</script>