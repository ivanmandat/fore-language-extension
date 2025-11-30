# IDashboardDocumentViewerBox.Dashboard

IDashboardDocumentViewerBox.Dashboard
-


# IDashboardDocumentViewerBox.Dashboard


## Синтаксис


Dashboard: [IUiDashboard](../IUiDashboard/IUiDashboard.htm);


## Описание


Свойство Dashboard определяет
 источник данных для компонента.


## Комментарии


В качестве значения свойства может быть указан любой компонент [UiDashboard](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiDashboard.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiDashboard
 с наименованием «UiDashboard1» и компонента DashboardDocumentViewerBox
 с наименованием «DashboardDocumentViewerBox1». В репозитории создана аналитическая
 панель с идентификатором «Dashboard». Подключите системные сборки Adhoc,
 Metabase.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

Begin

    MB := MetabaseClass.Active;

    UiDashboard1.Report := MB.ItemById("Dashboard").Bind As IAdhocReport;

    DashboardDocumentViewerBox1.Dashboard := UiDashboard1;

    UiDashboard1.Active := True;

End Sub Button1OnClick;


При нажатии на кнопку указанная аналитическая панель будет отображена
 в компоненте «DashboardDocumentViewerBox1».


См. также:


[IDashboardDocumentViewerBox](IDashboardDocumentViewerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
