# IBindingDimCombo.DisplayUserTextAttr

IBindingDimCombo.DisplayUserTextAttr
-


# IBindingDimCombo.DisplayUserTextAttr


## Синтаксис


DisplayUserTextAttr: String;


## Описание


Свойство DisplayUserTextAttr
 определяет значение параметра «DISPLAYUSERTEXTATTR»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «DISPLAYUSERTEXTATTR»
 определяет пользовательский шаблон, в соответствии с которым будут формироваться
 наименования элементов для отображаемого значения. Отображаемое значение
 доступно после отметки элементов справочника и закрытия редактора. Значение
 параметра представляет собой строку, которая может содержать любой текст
 и подстановки атрибутов. Подстановка атрибута имеет вид: %Идентификатор
 атрбута%. Для использования доступны те атрибуты, у которых не установлен
 признак скрытости. Пример:


DISPLAYUSERTEXTATTR
 = "Наименование: %NAME% (Дата:
 %USER_DATE_ATTR%)"


В окне «[Параметры
 редактора значений](uinav.chm::/GUI/ValueEditorParameters.htm)» значение данного параметра
 задаётся с помощью параметра «[Отображаемый
 атрибут](uinav.chm::/GUI/ValueEditorParameters.htm#dimension)».


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REGULAR_REPORT и справочника с идентификатором
 DIMENSIONS.


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

	    Style := Tab.Cell(0, 1).Style;

	    // Создадим и настроим редактор значений в виде раскрывающегося списка

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByUi("DimCombo");

	    DimComboBinding := Binding As IBindingDimCombo;

	    DimComboBinding.Object := "DIMENSIONS";

	    DimComboBinding.DisplayUserTextAttr := "%KEY%";

	    Style.Binding := DimComboBinding.AsString;

	    // Сохраним изменения

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в регламентном отчёте
 для ячейки B0 будет задан редактор значений в виде раскрывающегося списка
 справочника с пользовательским наименованием элементов отображаемого атрибута
 «%KEY%».


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
