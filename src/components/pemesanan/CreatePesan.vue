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
                                    <h3 class="card-title">Buat Pesanan</h3>
                                </div>
                                <form @submit.prevent="tambah">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Pelanggan</label>
                                                <select class="form-control" id="inpuidPelanggan" v-model="pesanan.idPelanggan">
                                                    <option v-for="nama in pelanggan" :key="nama.idPelanggan" :value="nama.idPelanggan">{{ nama.nama }}</option>
                                                </select>
                                                <!-- <input type="text" class="form-control" v-model="pesanan.idPelanggan"> -->
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputRight">Tiket</label>
                                                <select class="form-control" id="inpuidTiket" v-model="pesanan.idTiket">
                                                    <option v-for="jenis in tiket" :key="jenis.id" :value="jenis.id">{{ jenis.jenisTiket }}</option>
                                                </select>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Qty</label>
                                                <input type="text" class="form-control" v-model="pesanan.jumlahBeli">
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputRight">Metode Bayar</label>
                                                <select class="form-control" id="inputidMB" v-model="pesanan.idMetodeBayar">
                                                    <option v-for="jenisMb in metodebayar" :key="jenisMb.idMetodeBayar" :value="jenisMb.idMetodeBayar">{{ jenisMb.jenis }}</option>
                                                </select>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputRight">Status Pembayaran</label>
                                                <select class="form-control" id="inputRight" v-model="pesanan.statusPembayaran">
                                                    <option value="Diterima">Diterima</option>
                                                    <option value="Belum Diterima">Belum</option>
                                                </select>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary">Pesan</button>
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
            pelanggan: [],
            tiket:[],
            metodebayar:[],
            pesanan : {}
        }
    },
     created(){
        this.DataTiket();
        this.DataPelanggan();
        this.DataMB();
     },
     methods : 
     {
        DataMB() {
            axios.get('http://localhost:8000/api/getmetodebayar')
            .then(
                ({ data }) => {
                    this.metodebayar = data;
                }
            );

        },
        DataPelanggan() {
            axios.get('http://localhost:8000/api/getPelanggan')
            .then(
                ({ data }) => {
                    this.pelanggan = data;
                }
            );

        },
        DataTiket() {
            axios.get('http://localhost:8000/api/getTiket')
            .then(
                ({ data }) => {
                    this.tiket = data;
                }
            );

        },
        tambah(){  
            this.tambah_data();
        },
        tambah_data()
        {    
            axios.post('http://localhost:8000/api/pesananbaru', this.pesanan)
            .then(({data})=>
            {
                alert("Berhasil Pesan");
                this.$router.push('/pemesanan');
                this.pesanan = data;
            })
        }
    }
}
</script>