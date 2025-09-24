<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Form Edit Metode Bayar</h1>
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
                                    <h3 class="card-title">Edit</h3>
                                </div>
                                <form @submit.prevent="edit">
                                    <input type="hidden" v-model="idMetodeBayar">
                                    <div class="card-body">                                        
                                        <div class="form-group">
                                            <label>Jenis </label>
                                            <input type="text" class="form-control" v-model="jenis">
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary" >Simpan</button>
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
            metodebayar : [],
            idMetodebayar : "",
            jenis:'',
        }
    },
    created() {  
        this.DataMenu(),
        this.getdetail(this.$route.params.idMetodeBayar)
        this.editdata()
    },
    methods : {
        DataMenu(){
            axios.get('http://127.0.0.1:8000/api/getmetodebayar')
            .then(
                ({data}) => {
                    this.metodebayar = data;
                }
            );
        },
        getdetail(idMetodeBayar){
            axios.get('http://127.0.0.1:8000/api/getidmetodebayar/' + idMetodeBayar)
            .then((response) => {
                console.log(response.data[0])
                this.idMetodeBayar = response.data[0].idMetodeBayar
                this.jenis = response.data[0].jenis
               
            })
        },
        edit : function (){
            let DataMenu= {
                idMetodeBayar : this.idMetodeBayar,
                jenis : this.jenis,
            }
            axios.put("http://127.0.0.1:8000/api/editmetodebayar/" + this.idMetodeBayar , DataMenu)
            .then(
                ({data}) => {
                    alert("Berhasil update data");
                    this.$router.push('/metodebayar');
                    this.metodebayar = data;
                }
            )
        },
    }
}

</script>
