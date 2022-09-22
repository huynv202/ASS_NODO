import { Routes } from '@angular/router';
import { LessonOneComponent } from '../../pages/lesson-one/lesson-one.component';

export const content: Routes = [
    {
        path: 'dashboard',
        loadChildren: () =>
            import('../../components/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
    },
    {
        path: 'eCommerce',
        loadChildren: () =>
            import('../../components/ecommerce/ecommerce.module').then(
                (m) => m.ECommerceModule
            ),
    },
    {
        path: 'crypto-currencies',
        loadChildren: () =>
            import(
                '../../components/crypto-currencies/crypto-currencies.module'
            ).then((m) => m.CryptoCurrenciesModule),
    },
    {
        path: 'elements',
        loadChildren: () =>
            import('../../components/elements/elements.module').then(
                (m) => m.ElementsModule
            ),
    },
    {
        path: 'advanced-ui',
        loadChildren: () =>
            import('../../components/advanced-ui/advanced-ui.module').then(
                (m) => m.AdvancedUiModule
            ),
    },
    {
        path: 'apps',
        loadChildren: () =>
            import('../../components/apps/apps.module').then(
                (m) => m.AppsModule
            ),
    },
    {
        path: 'tables',
        loadChildren: () =>
            import('../../components/tables/tables.module').then(
                (m) => m.TablesModule
            ),
    },
    {
        path: 'icons',
        loadChildren: () =>
            import('../../components/icons/icons.module').then(
                (m) => m.IconsModule
            ),
    },
    {
        path: 'forms',
        loadChildren: () =>
            import('../../components/forms/forms.module').then(
                (m) => m.FormModule
            ),
    },
    {
        path: 'charts',
        loadChildren: () =>
            import('../../components/chart/chart.module').then(
                (m) => m.ChartModule
            ),
    },
    {
        path: 'pages',
        loadChildren: () =>
            import('../../components/pages/pages.module').then(
                (m) => m.PagesModule
            ),
    },
    {
        path: 'utilities',
        loadChildren: () =>
            import('../../components/utilities/utilities.module').then(
                (m) => m.UtilitiesModule
            ),
    },
    {
        path: 'category-management',
        loadChildren: () =>
            import('../../pages/category-management/category.module').then(
                (m) => m.CategoryModule
            ),
    },
    {
        path: 'product-management',
        loadChildren: () =>
            import('../../pages/product-management/product.module').then(
                (m) => m.ProductModule
            ),
    },
    {
        path: 'category-mapping-management',
        loadChildren: () =>
            import(
                '../../pages/category-mapping-management/category-mapping.module'
            ).then((m) => m.CategoryMappingModule),
    },
    // {
    //     path: 'training',
    //     loadChildren: () =>
    //         import('../../pages/angular-training/angular-training.module').then(
    //             (m) => m.AngularTrainingModule
    //         ),
    // },
    // {
    //     path: 'les-two',
    //     loadChildren: () =>
    //         import('../../pages/lesson-two/lesson-two.module').then(
    //             (m) => m.LessonTwoModule
    //         ),
    // },
    // {
    //     path: 'les-one',
    //     component: LessonOneComponent,
    // },
    // {
    //     path: 'les-three',
    //     loadChildren: () =>
    //         import('../../pages/lesson-three/lesson-three.module').then(
    //             (m) => m.LessonThreeModule
    //         ),
    // },
    // {
    //     path: 'les-four',
    //     loadChildren: () =>
    //         import('../../pages/lesson-four/lesson-four.module').then(
    //             (m) => m.LessonFourModule
    //         ),
    // },
    {
        path: 'les-five',
        loadChildren: () =>
            import('../../pages/lesson-five/lesson-five.module').then(
                (m) => m.LessonFiveModule
            ),
    },
    // {
    //     path: 'les-six',
    //     loadChildren: () =>
    //         import('../../pages/lesson-six/lesson-six.module').then(
    //             (m) => m.LessonSixModule
    //         ),
    // },
    {
        path: 'book-management',
        loadChildren: () =>
            import('../../pages/book/book.module').then(
                (m) => m.BookModule
            ),
    },
    {
        path: 'publishing-company',
        loadChildren: () =>
            import('../../pages/publishing-company/publishing-company.module').then(
                (m) => m.PublishingCompanyModule
            ),
    },
    {
        path: 'reader-management',
        loadChildren: () =>
            import('../../pages/reader/reader.module').then(
                (m) => m.ReaderModule
            ),
    },
    {
        path: 'actor-management',
        loadChildren: () =>
            import('../../pages/actor/actor.module').then(
                (m) => m.ActorModule
            ),
    },
    {
        path: 'borrow-management',
        loadChildren: () =>
            import('../../pages/book-borrow/book-borrow.module').then(
                (m) => m.BookBorrowModule
            ),
    }

];
