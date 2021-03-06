angular.module('wpsControls').component(
        'wpsControls',
        {
            templateUrl: "components/wpsUserInterface/wpsControls/wps-controls.template.html",
            /*
             * controller is injected with two module-values from module
             * wpsSetup
             */
            controller: ['wpsFormControlService',
                function ControlsController(wpsFormControlService) {

                    this.formControlServiceInstance = wpsFormControlService;
                    
                    if (applicationProperties.skipWpsSetup){
                        var wpsSetupTab = document.getElementById("setup");
                        wpsSetupTab.class = "tab-pane fade";
                        var wpsProcessTab = document.getElementById("processes");
                        wpsProcessTab.class = "tab-pane fade in active";
                        this.formControlServiceInstance.processesTab_classAttribute = "active";
                        this.formControlServiceInstance.processesTab_dataToggleAttribute = "tab";
                    }

                }]
        });