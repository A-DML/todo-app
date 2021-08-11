<template>
    <div class="orderBot">
        <div class="col-12 col-xl-8">
            
            <!-- Orders -->
            <div class="card">
              <div class="card-header">
                <div class="row align-items-center">
                  <div class="col">
                
                    <!-- Title -->
                    <h4 class="card-header-title">
                      Orders
                    </h4>

                  </div>
                  <div class="col-auto mr-n3">
                    
                    <!-- Caption -->
                    <span class="text-muted">
                      Show affiliate:
                    </span>

                  </div>
                  <div class="col-auto">

                    <!-- Switch -->
                    <div class="custom-control custom-switch">
                      <input type="checkbox" class="custom-control-input" id="cardToggle" data-toggle="chart" data-target="#ordersChart" data-add="{&quot;data&quot;:{&quot;datasets&quot;:[{&quot;data&quot;:[15,10,20,12,7,0,8,16,18,16,10,22],&quot;backgroundColor&quot;:&quot;#d2ddec&quot;,&quot;label&quot;:&quot;Affiliate&quot;}]}}">
                      <label class="custom-control-label" for="cardToggle"></label>
                    </div>

                  </div>
                </div> <!-- / .row -->

              </div>
              <div class="card-body">
                
                <!-- Chart -->
                <div class="chart"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                  <canvas id="ordersChart" class="chart-canvas chartjs-render-monitor" width="687" height="300" style="display: block; width: 687px; height: 300px;"></canvas>
                </div>

              </div>
            </div>

          </div>
    </div>
</template>