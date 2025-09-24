<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <!-- <h1 class="m-0">Buat Tiket</h1> -->
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
                                    <h3 class="card-title">Buat Tiket</h3>
                                </div>
                                <form @submit.prevent="tambah">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Pertandingan</label>
                                                <input type="text" class="form-control" v-model="tiket.namaTiket">
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputRight">Kategori</label>
                                                <select class="form-control" id="inputRight" v-model="tiket.jenisTiket">
                                                    <option value="Ekonomi">Ekonomi</option>
                                                    <option value="VIP">VIP</option>
                                                </select>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Harga</label>
                                                <input type="text" class="form-control" v-model="tiket.harga">
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputRight">Tempat</label>
                                                <input type="text" class="form-control" v-model="tiket.tempat">
                                            </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Waktu Pertandingan</label>
                                                <input type="time" class="form-control" v-model="tiket.waktuPertandingan">
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputRight">Tanggal</label>
                                                <input type="date" class="form-control" v-model="tiket.tgl">
                                            </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Stok Tiket</label>
                                                <input type="text" class="form-control" v-model="tiket.stok">
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary">Buat</button>
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
// import Vue from 'vue';

// Vue.use(axios);

export default {
    data() {
        return {
            tiket : {}
        }
    },
     created(){
        this.tambah_pelanggan();
     },
     methods : 
     {
        tambah(){  
            this.tambah_data();
        },
        tambah_data()
        {    
            axios.post('http://localhost:8000/api/buatTiket', this.tiket)
            .then(({data})=>
            {
                alert("Berhasil Buat Tiket Baru");``
                this.$router.push('/tiket');
                this.tiket = data;
            })
        }
    }
}
</script>