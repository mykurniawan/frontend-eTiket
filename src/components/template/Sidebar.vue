<template>
    <!-- <aside class="main-sidebar sidebar-dark-info elevation-4"> -->
    <aside class="main-sidebar sidebar-light-primary elevation-4" >
        <!-- Brand Logo -->
        <a href="#" class="brand-link" style="text-decoration: none;">
            <img style="width: 50px" :src="require('@/assets/e.png')" alt="Deskripsi Gambar" />
            <!-- <p>e-Ticket</p> -->
            <!-- <span class="text-light">eTiket</span>         -->
           <b>e-Ticket</b>
        </a>
        
        <!-- Sidebar -->
        <div class="sidebar">             

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <router-link to="/" href="#" class="nav-link">
                        <i class="nav-icon fas fa-home"></i>
                        <p>Dashboard</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/customer" href="#" class="nav-link">
                        <i class="nav-icon fas fa-user-friends"></i>
                        <p>Customers</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/tiket" href="#" class="nav-link">
                        <i class="nav-icon fas fa-address-card"></i>
                        <p>Tiket</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-exchange-alt"></i>
                    <p>
                        Transaksi
                        <i class="right fas fa-angle-left"></i>
                    </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <router-link to="/metodebayar" href="#" class="nav-link">
                                <i class="fas fa-wallet"></i>
                                <p> Metode Bayar</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/pemesanan" href="#" class="nav-link">
                                <i class="fas fa-shopping-cart"></i>
                                <p> Pemesanan</p>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
export default {
    name : 'AppSidebar',
    // data(){
    //     return {
    //         logo : require('@/assets/e.png')
    //     }
    // }
}
</script>
