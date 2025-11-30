# IEtlForeWizardPage

IEtlForeWizardPage
-


# IEtlForeWizardPage


Сборка: Etl;


## Описание


Интерфейс IEtlForeWizardPage
 используется для реализации класса, создающего страницу мастера источника/приёмника/процедуры
 на основе шаблона.


## Иерархия наследования


           IEtlForeWizardPage


## Комментарии


Свойства и методы данного интерфейса должны быть переопределены в пользовательском
 классе. Класс задаётся в свойстве [IEtlTemplate.Class](KeFore.chm::/Interface/IEtlTemplate/IEtlTemplate.Class.htm)
 пользовательского шаблона.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Model](IEtlForeWizardPage.Model.htm)
		 Свойство Model определяет
		 модель метаданных для работы со страницей мастера.


		 ![](../../Property_Image.gif)
		 [Title](IEtlForeWizardPage.Title.htm)
		 Свойство Title определяет
		 наименование новой страницы мастера.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [IsDoneAllowed](IEtlForeWizardPage.IsDoneAllowed.htm)
		 Метод IsDoneAllowed
		 определяет, будет ли активна/не активна кнопка «Готово»
		 страницы мастера.


		 ![](../../Sub_Image.gif)
		 [IsLeaveAllowed](IEtlForeWizardPage.IsLeaveAllowed.htm)
		 Метод IsLeaveAllowed
		 определяет, будет ли активна/не активна кнопка «Далее»
		 страницы мастера.


		 ![](../../Sub_Image.gif)
		 [OnSetActive](IEtlForeWizardPage.OnSetActive.htm)
		 Метод OnSetActive определяет,
		 будет ли активна страница мастера.


		 ![](../../Sub_Image.gif)
		 [OnWizardBack](IEtlForeWizardPage.OnWizardBack.htm)
		 Метод OnWizardBack
		 определяет страницу, на которую будет осуществлён переход при
		 нажатии на кнопку «Назад».


		 ![](../../Sub_Image.gif)
		 [OnWizardNext](IEtlForeWizardPage.OnWizardNext.htm)
		 Метод OnWizardNext
		 определяет страницу, на которую будет осуществлен переход при
		 нажатии на кнопку «Далее».


См. также:


[Интерфейсы
 сборки Etl](../KeEtl_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
