# IModelBox.Export

IModelBox.Export
-


# IModelBox.Export


## Синтаксис


		Export: [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm);


## Описание


Метод Export экспортирует модель,
 отображаемую в компоненте, в регламентный отчёт.


## Комментарии


Результатом работы метода является объект, содержащий в себе регламентный
 отчёт. Данный регламентный отчёт будет открыт на редактирование.


## Пример


Для выполнения примера в репозитории предполагается наличие формы с
 расположенными на ней:


	- кнопкой с идентификатором Button1;


	- компонентом ModelBox с идентификатором ModelBox1;


	- компонентом UiModel с идентификатором UiModel1.
	 Компонент UiModel1 является источником данных для ModelBox1.


Добавьте ссылку на системные сборки: Metabase, Ms, Report, Ui.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    Obj: IMetabaseObject;

		    Rep: IPrxReport;

		Begin

		    Obj := ModelBox1.Export;

		    Rep := Obj As IPrxReport;

		    If (Rep <> Null) Then

		        Rep.SaveToFile("c:\my.ppreport", PrxReportSaveMode.Full);

		    End If;

		End Sub Button1OnClick;


В результате выполнения примера модель, отображаемая в компоненте ModelBox1,
 будет преобразована в регламентный отчёт и экспортирована в файл отчёта
 my.ppreport.


См. также:


[IModelBox](IModelBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
