<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <!-- <h1 class="m-0">Data Pemesanan</h1> -->
                        </div>          
                    </div>
                </div>
            </div>
 
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-primary card-outline">
                                <div class="card-body">
                                    <h4 style="float: right;" class="m-0">Data Pemesanan</h4>

                                    <router-link class="btn btn-info mb-2" to="/buat/pemesanan">
                                        <i class="fas fa-plus"></i> Tambah
                                    </router-link>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th class="text-center" style="width: 10px">No</th>
                                            <th class="text-center">ID Pemesanan</th>
                                            <th class="text-center">Nama Pelanggan</th>
                                            <th class="text-center">Tiket</th>
                                            <th class="text-center">Jumlah Beli</th>
                                            <th class="text-center">Total bayar</th>
                                            <th class="text-center">Metode Bayar</th>
                                            <th class="text-center">Tanggal Bayar</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-center">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(s, index) in pesanan" :key="s.idPesanan">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ s.idPesanan }}</td>
                                                <td>{{ getNamaPelanggan(s.idPelanggan) }}</td>
                                                <td>{{ getNamaTiket(s.idTiket) }}</td>
                                                <td>{{ s.jumlahBeli }}</td>
                                                <td>{{ s.totalBayar }}</td>
                                                <td>{{ getMB(s.idMetodeBayar) }}</td>
                                                <td>{{ s.tglPembayaran }}</td>
                                                <td>{{ s.statusPembayaran }}</td>
                                                <!-- <td>{{ getJenisTiket(idTiket.jenisTiket) }}</td> -->
                                                <td>
                                                    <div class="btn-group">
                                                         <router-link class="btn btn-info text-light" :to="{ path: '/pemesanan/UpdatePesanan/' + s.idPesanan }">Edit</router-link>
                                                        <button type="button" @click="hapus(s.idPesanan)" class="btn btn-danger">Hapus</button>                                                      
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
            
</template>

<script>

// import Vue from 'vue';
import axios from 'axios';
// Vue.use(axios);

export default {
    data() {
        return {
            pesanan : [],
            pelanggan :[],
            metodebayar :[],
            tiket : []
        }
        
    },
    created() {
       this.DataPesanan();
       this.DataPelanggan();
       this.DataTiket();
       this.DataMB();

    },
    methods: {
        
        DataTiket() {
            axios.get('http://localhost:8000/api/getTiket')
            .then(
                ({ data }) => {
                    this.tiket = data;
                }
            );

        },
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
        // metode bayar
        getMB(idMetodeBayar){
            const metodebayar = this.metodebayar.find(metodebayar => metodebayar.idMetodeBayar === idMetodeBayar);
            return metodebayar ? metodebayar.jenis : '';
        },
        // tiket
        getNamaTiket(id){
            const tiket = this.tiket.find(tiket => tiket.id === id);
            return tiket ? tiket.namaTiket : '';
        },
        // getJenisTiket(id){
        //     const tiket = this.tiket.find(tiket => tiket.id === id);
        //     return tiket ? tiket.jenisTiket : '';
        // },
        //pelanggan
        getNamaPelanggan(idPelanggan){
            const pelanggan = this.pelanggan.find(pelanggan => pelanggan.idPelanggan === idPelanggan);
            return pelanggan ? pelanggan.nama : '';
        },
        DataPesanan() {
            axios.get('http://localhost:8000/api/getpesanan')
            .then(
                ({ data }) => {
                    this.pesanan = data;
                }
            );

        },
            hapus(idPesanan) {
            axios.delete(`http://localhost:8000/api/hapuspesanan/`+ idPesanan)
            alert("Sukses Hapus Data");
            location.reload()               
        }  
    }
}
</script>