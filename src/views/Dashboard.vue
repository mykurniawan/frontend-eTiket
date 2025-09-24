<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <!-- <h1 class="m-0">Dashboard</h1> -->
                        </div>          
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="jumbotron jumbotron-fluid">
                                <div class="container">
                                    <h1 class="display-4">
                                    <img style="width: 60px" :src="require('@/assets/e.png')" alt="Deskripsi Gambar" /> <i>e-Tiket</i></h1>
                                    <h4 class="lead"> <b>Stadion Gajayana Malang.</b> No Ticket No Game!</h4>
                                </div>
                            </div>
                             <div class="card card-info card-outline">
                                <div class="card-body">
                                        <h3 class="text-color-lime">Tiket Hari ini</h3>
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                <th class="text-center" style="width: 10px">NO.</th>
                                                <th class="text-center">ID Tiket</th>
                                                <th class="text-center">Nama Tiket</th>
                                                <th class="text-center">Kategori</th>
                                                <th class="text-center">Harga</th>
                                                <th class="text-center">Tempat</th>
                                                <th class="text-center">Kick-Off</th>
                                                <th class="text-center">Tanggal</th>
                                                <th class="text-center">Stok</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(s, index) in tiket" :key="s.id">
                                                    <td>{{ index + 1 }}</td>
                                                    <td>{{ s.id }}</td>
                                                    <td>{{ s.namaTiket }}</td>
                                                    <td>{{ s.jenisTiket }}</td>
                                                    <td>{{ s.harga }}</td>
                                                    <td>{{ s.tempat }}</td>
                                                    <td>{{ s.waktuPertandingan }}</td>
                                                    <td>{{ s.tgl }}</td>
                                                    <td>{{ s.stok }}</td>
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
import axios from 'axios';
// Vue.use(axios);

export default {
    name : 'AppDashboard',

    data() {
        return {
            tiket : {}
        }
    },
    created() {
       this.DataTiket();

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
            hapus(id) {
            axios.delete(`http://localhost:8000/api/hapusTiket/`+ id)
            alert("Sukses delete tiket");
            location.reload()               
        }  
    }
}
</script> 