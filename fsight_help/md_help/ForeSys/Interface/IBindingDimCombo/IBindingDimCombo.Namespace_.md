# IBindingDimCombo.Namespace_

IBindingDimCombo.Namespace_
-


# IBindingDimCombo.Namespace_


## Синтаксис


Namespace_: String;


## Описание


Свойство Namespace_ определяет
 значение параметра «NAMESPACE»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «NAMESPACE» определяет
 путь до справочника, который создан в [контейнере](UiNavObj.chm::/Container/Container.htm)
 или иерархии вложенных контейнеров.


Значение параметра задаётся в строке связи с помощью свойства Namespace_ или вручную в формате:


NAMESPACE="VALUE"


Где:


	- VALUE. Значение параметра,
	 определяющее последовательность вложенных объектов до справочника
	 в формате: <идентификатор контейнера_1>.<идентификатор контейнера_2>.
	 ... .<идентификатор контейнера_n>.


Например:


NAMESPACE="OBJ14046.OBJ14047.OBJ14050"


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REGULAR_REPORT, контейнера с идентификатором
 CONTAINER_1, в котором содержится контейнер с идентификатором CONTAINER_2.
 В контейнере CONTAINER_2 имеется справочник с идентификатором DICT_1.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    BM: IBindingManager;

	    DimComboBinding: IBindingDimCombo;

	    Tab: ITabSheet;

	    Style: ITabCellStyle;

	    Binding: IBindingValue;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

	    // Получим стиль ячейки в левом верхнем углу активного листа отчёта

	    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

	    Style := Tab.Cell(1, 0).Style;

	    // Создадим и настроим редактор значений в виде раскрывающегося списка

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByUi("DimCombo");

	    DimComboBinding := Binding As IBindingDimCombo;

	    DimComboBinding.Object := "DICT_1";

	    DimComboBinding.Namespace_ := "CONTAINER_1.CONTAINER_2";

	    Style.Binding := DimComboBinding.AsString;

	    // Сохраним изменения

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в регламентном отчёте
 для ячейки А1 будет задан редактор значений в виде раскрывающегося списка
 справочника, который содержится в иерархии вложенных контейнеров.


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
