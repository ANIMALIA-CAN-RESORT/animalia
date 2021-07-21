'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">animalia documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdministracionModule.html" data-type="entity-link">AdministracionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdministracionModule-1fbf02b7f84bbd416c2535395c7b69c4"' : 'data-target="#xs-components-links-module-AdministracionModule-1fbf02b7f84bbd416c2535395c7b69c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdministracionModule-1fbf02b7f84bbd416c2535395c7b69c4"' :
                                            'id="xs-components-links-module-AdministracionModule-1fbf02b7f84bbd416c2535395c7b69c4"' }>
                                            <li class="link">
                                                <a href="components/UsuarioComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsuarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioFichaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsuarioFichaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsuarioFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuariosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsuariosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdministracionRoutingModule.html" data-type="entity-link">AdministracionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-cc9d78dec4882f3903802da474a13676"' : 'data-target="#xs-components-links-module-AppModule-cc9d78dec4882f3903802da474a13676"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-cc9d78dec4882f3903802da474a13676"' :
                                            'id="xs-components-links-module-AppModule-cc9d78dec4882f3903802da474a13676"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientesModule.html" data-type="entity-link">ClientesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientesModule-909d238aefddf8dedbf73d231a2e730e"' : 'data-target="#xs-components-links-module-ClientesModule-909d238aefddf8dedbf73d231a2e730e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientesModule-909d238aefddf8dedbf73d231a2e730e"' :
                                            'id="xs-components-links-module-ClientesModule-909d238aefddf8dedbf73d231a2e730e"' }>
                                            <li class="link">
                                                <a href="components/ClienteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClienteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClienteFichaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClienteFichaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClienteFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClienteFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClienteMascotasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClienteMascotasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClientesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientesRoutingModule.html" data-type="entity-link">ClientesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-f1d67c6db4523850396d2d3f11bee76d"' : 'data-target="#xs-components-links-module-CoreModule-f1d67c6db4523850396d2d3f11bee76d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-f1d67c6db4523850396d2d3f11bee76d"' :
                                            'id="xs-components-links-module-CoreModule-f1d67c6db4523850396d2d3f11bee76d"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShellComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-69fb6aa892e06b64f8bfb9e4eddb7af5"' : 'data-target="#xs-components-links-module-HomeModule-69fb6aa892e06b64f8bfb9e4eddb7af5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-69fb6aa892e06b64f8bfb9e4eddb7af5"' :
                                            'id="xs-components-links-module-HomeModule-69fb6aa892e06b64f8bfb9e4eddb7af5"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MascotasModule.html" data-type="entity-link">MascotasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MascotasModule-eb2c9293e7e37d2f7f9e68299a60efc9"' : 'data-target="#xs-components-links-module-MascotasModule-eb2c9293e7e37d2f7f9e68299a60efc9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MascotasModule-eb2c9293e7e37d2f7f9e68299a60efc9"' :
                                            'id="xs-components-links-module-MascotasModule-eb2c9293e7e37d2f7f9e68299a60efc9"' }>
                                            <li class="link">
                                                <a href="components/MascotaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MascotaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MascotaFichaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MascotaFichaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MascotaFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MascotaFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MascotaPrestacionesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MascotaPrestacionesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MascotasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MascotasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MascotasRoutingModule.html" data-type="entity-link">MascotasRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrestacionesModule.html" data-type="entity-link">PrestacionesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrestacionesModule-9912e00fec6c4ba0dc02924077265ffe"' : 'data-target="#xs-components-links-module-PrestacionesModule-9912e00fec6c4ba0dc02924077265ffe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrestacionesModule-9912e00fec6c4ba0dc02924077265ffe"' :
                                            'id="xs-components-links-module-PrestacionesModule-9912e00fec6c4ba0dc02924077265ffe"' }>
                                            <li class="link">
                                                <a href="components/FacturaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FacturaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrestacionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrestacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrestacionFichaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrestacionFichaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrestacionFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrestacionFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrestacionesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrestacionesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrestacionesRoutingModule.html" data-type="entity-link">PrestacionesRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ClienteImpl.html" data-type="entity-link">ClienteImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/MascotaImpl.html" data-type="entity-link">MascotaImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrestacionImpl.html" data-type="entity-link">PrestacionImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsuarioImpl.html" data-type="entity-link">UsuarioImpl</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ClienteService.html" data-type="entity-link">ClienteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MascotaService.html" data-type="entity-link">MascotaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrestacionService.html" data-type="entity-link">PrestacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuarioService.html" data-type="entity-link">UsuarioService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cliente.html" data-type="entity-link">Cliente</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Mascota.html" data-type="entity-link">Mascota</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Prestacion.html" data-type="entity-link">Prestacion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Usuario.html" data-type="entity-link">Usuario</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});