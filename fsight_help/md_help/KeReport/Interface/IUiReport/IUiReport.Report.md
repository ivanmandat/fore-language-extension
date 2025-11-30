# IUiReport.Report

IUiReport.Report
-


# IUiReport.Report


## Синтаксис


Report: [IPrxReport](../IPrxReport/IPrxReport.htm);


## Описание


Свойство Report определяет регламентный
 отчет, реализуемый интерфейсом [IPrxReport](../IPrxReport/IPrxReport.htm).


## Комментарии


Для открытия доступа к регламентному отчёту необходимо свойству [IUiMetabaseObject.Active](kefore.chm::/interface/iuimetabaseobject/iuimetabaseobject.active.htm)
 установить значение True.


## Пример


Для выполнения примера предполагается наличие формы с кнопкой с наименованием
 Button и компонентов UiReport и ReportBox. Для ReportBox источником данных
 выбран компонент UiReport.
Добавьте ссылки на системные сборки: Forms, Metabase, Report.


Пример является обработчиком события OnClick для кнопки.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    MB: IMetabase;

		Begin

		    // Получаем репозиторий

		    MB := MetabaseClass.Active;

		    // Получаем регламентный отчет

		    UiReport1.Report := MB.ItemById("REPORT").Edit As IPrxReport;

		    UiReport1.Active := True;

		End Sub Button1OnClick;


В результате выполнения примера при нажатии на кнопку в качестве источника
 данных для компонента UiReport будет установлен регламентный отчет с идентификатором
 REPORT, который будет отображен в компоненте ReportBox.


См. также:


[IUiReport](IUiReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
