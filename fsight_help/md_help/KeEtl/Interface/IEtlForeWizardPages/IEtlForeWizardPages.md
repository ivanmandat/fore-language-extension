# IEtlForeWizardPages

IEtlForeWizardPages
-


# IEtlForeWizardPages


Сборка: Etl;


## Описание


Интерфейс IEtlForeWizardPages
 используется для реализации класса, создающего страницы мастера источника/приёмника/процедуры
 на основе шаблона.


## Иерархия наследования


           IEtlForeWizardPages


## Комментарии


Свойства и методы данного интерфейса должны быть переопределены в пользовательском
 классе. Класс задаётся в свойстве [IEtlTemplate.Class](KeFore.chm::/Interface/IEtlTemplate/IEtlTemplate.Class.htm)
 пользовательского шаблона.


Принцип работы со страницами мастера:


	- Свойство [Count](IEtlForeWizardPages.Count.htm) должно
	 вернуть количество добавляемых в мастер страниц;


	- Метод [Item](IEtlForeWizardPages.Item.htm) возвращает
	 описание формы, которая будет выступать в качестве страницы мастера.
	 Обращение к методу осуществляется столько раз, сколько задано страниц
	 в свойстве [Count](IEtlForeWizardPages.Count.htm). Индекс
	 формируемой страницы можно получить в параметре Index
	 метод [Item](IEtlForeWizardPages.Item.htm).


	- Используя свойство [Model](IEtlForeWizardPages.Model.htm)
	 можно сформировать и передать отдельным страницам мастера модель метаданных,
	 содержащую какие-либо настройки. Данная модель будет доступна в свойстве
	 [IEtlForeWizardPage.Model](../IEtlForeWizardPage/IEtlForeWizardPage.Model.htm)
	 отдельных страниц и в дальнейшем может быть изменена.


	- Метод [OnWizardCancel](IEtlForeWizardPages.OnWizardCancel.htm)/[OnWizardOK](IEtlForeWizardPages.OnWizardOK.htm) будут вызваны
	 во время завершение работы с мастером при нажатии кнопок «Отмена»/«Готово» соответственно и могут быть
	 использованы для выполнения каких-либо завершающих действий.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IEtlForeWizardPages.Count.htm)
		 Свойство Count возвращает
		 количество новых страниц мастера.


		 ![](../../Property_Image.gif)
		 [Metabase](IEtlForeWizardPages.Metabase.htm)
		 Свойство Metabase возвращает
		 репозиторий, в котором производится работа.


		 ![](../../Property_Image.gif)
		 [Model](IEtlForeWizardPages.Model.htm)
		 Свойство Model определяет
		 модель метаданных для работы со страницами мастера.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Item](IEtlForeWizardPages.Item.htm)
		 Метод Item используется
		 для подключения указанной формы репозитория в качестве страницы
		 мастера источника/приёмника пользователя.


		 ![](../../Sub_Image.gif)
		 [OnWizardCancel](IEtlForeWizardPages.OnWizardCancel.htm)
		 Метод OnWizardCancel
		 позволяет организовать обработку нажатия кнопки «Отмена»
		 в мастере.


		 ![](../../Sub_Image.gif)
		 [OnWizardOK](IEtlForeWizardPages.OnWizardOK.htm)
		 Метод OnWizardOK позволяет
		 организовать обработку нажатия кнопки «Готово»
		 в мастере.


См. также:


[Интерфейсы
 сборки Etl](../KeEtl_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
