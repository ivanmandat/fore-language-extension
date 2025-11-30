# IMetabaseObjectDescriptor.LoadChildScreenshots

IMetabaseObjectDescriptor.LoadChildScreenshots
-


# IMetabaseObjectDescriptor.LoadChildScreenshots


## Синтаксис


LoadChildScreenshots(Type:
 [ScreenshotType](../../Enums/ScreenshotType.htm));


## Параметры


Type. Тип изображения, в котором
 производится кеширование.


## Описание


Метод LoadChildScreenshots кеширует
 изображения, используемые при предварительном просмотре, для всех дочерних
 объектов.


## Комментарии


При выполнении метода в кеш будут помещены изображения, используемые
 при предварительном просмотре, для всех поддерживающих предварительный
 просмотр дочерних объектов. Под предварительным просмотром понимается
 представление объектов репозитория в виде [огромных значков](UiNav.chm::/GUI/View.htm#extralarge_icons).
 Предварительный просмотр в виде изображения первой страницы доступен для
 отчётов, созданных с помощью инструментов «[Аналитические
 панели](UiAdhoc.chm::/UiAdhoc_Purpose.htm)», «[Аналитические
 запросы (OLAP)](UIExpress.chm::/purpose/UiExpress_Purpose.htm)», «[Отчёты](UIReport.chm::/UiReport_purpose.htm)»
 и «[Анализ временных рядов](UiDw.chm::/UiDw_Title.htm)».


Метод актуален для использования, если свойство [IMetabase.IsScreenshotSupported](../IMetabase/IMetabase.IsScreenshotSupported.htm)
 возвращает значение True.


## Примеры


Для выполнения примера предполагается наличие в репозитории папки с
 идентификатором REPORTS_FOLDER. В папке хранятся различные отчёты.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    If MB.IsScreenshotSupported Then

	        MDesc := MB.ItemById("REPORTS_FOLDER");

	        MDesc.LoadChildScreenshots(ScreenshotType.Default_);

	    End If;

	End Sub UserProc;


При выполнении примера, если в репозитории включена возможность [отображения
 объектов в виде значков без учёта прав доступа](Admin.chm::/03_Admin/Access_control_settings.htm#extralargeicons), то
 для всех объектов из указанной папки в локальный кеш на текущем компьютере
 будут сохранены миниатюрные изображения.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
