# ScreenshotType

ScreenshotType
-


# ScreenshotType


## Описание


Перечисление ScreenshotType
 используется для определения типа изображения при предварительном просмотре
 объектов репозитория.


Используется следующими свойствами и методами:


	- [IMetabaseObjectDescriptor.Screenshot](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Screenshot.htm);


	- [IMetabaseObjectDescriptor.LoadChildScreenshots](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.LoadChildScreenshots.htm).


## Комментарии


Под предварительным просмотром понимается представление объектов репозитория
 в навигаторе в виде [огромных
 значков](UiNav.chm::/GUI/View.htm#extralarge_icons).
 Предварительный просмотр в виде изображения первой страницы доступен для
 отчётов, созданных с помощью инструментов «[Аналитические
 панели](UiAdhoc.chm::/UiAdhoc_Purpose.htm)», «[Аналитические
 запросы (OLAP)](UIExpress.chm::/purpose/UiExpress_Purpose.htm)», «[Отчёты](UIReport.chm::/UiReport_purpose.htm)»
 и «[Анализ временных рядов](UiDw.chm::/UiDw_Title.htm)».


В [конструкторе
 бизнес-приложений](Constructor.chm::/Intro/Designer_business_applications.htm) вид элемента в навигаторе определяется
 при [настройке
 параметров отображения пользовательских объектов](Constructor.chm::/Web/Setting_Navigation_Structure.htm#view).


## Допустимые значения


		 Значение
		 Краткое описание


		 1
		 Default_. По умолчанию.
		 Тип изображения при предварительном просмотре - «PNG» любого
		 размера.


		 2
		 Emf. Тип изображения
		 при предварительном просмотре - «EMF».


		 3
		 Custom. [Огромные значки](UiNav.chm::/GUI/View.htm#extralarge_icons).
		 Тип изображения при предварительном просмотре - «PNG». Изображение
		 не обновляется при сохранении отчёта.


		 4
		 CustomM. [Крупные значки](UiNav.chm::/GUI/View.htm#large_icons).
		 Тип изображения при предварительном просмотре - «PNG». Изображение
		 не обновляется при сохранении отчёта.


		 5
		 CustomS. [Мелкие значки](UiNav.chm::/GUI/View.htm#small_icons).
		 Тип изображения при предварительном просмотре - «PNG». Изображение
		 не обновляется при сохранении отчёта.


Примечание.
 Значения «CustomM» и «CustomS»
 используются только для определения типа [заданного
 эскиза объекта](Constructor.chm::/desktop/setting_web_application_structure.htm#load_sketch) в [конструкторе
 бизнес-приложений](Constructor.chm::/Intro/Designer_business_applications.htm).


См. также:


[Перечисления
 сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
