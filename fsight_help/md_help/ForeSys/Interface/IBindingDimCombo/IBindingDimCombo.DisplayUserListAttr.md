# IBindingDimCombo.DisplayUserListAttr

IBindingDimCombo.DisplayUserListAttr
-


# IBindingDimCombo.DisplayUserListAttr


## Синтаксис


DisplayUserListAttr: String;


## Описание


Свойство DisplayUserListAttr
 определяет значение параметра «DISPLAYUSERLISTATTR»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «DISPLAYUSERLISTATTR»
 определяет пользовательский шаблон, в соответствии с которым будут формироваться
 наименования элементов всех уровней в раскрытом редакторе. Значение параметра
 представляет собой строку, которая может содержать любой текст и подстановки
 атрибутов. Подстановка атрибута имеет вид: %Идентификатор атрибута%. Для
 использования доступны те атрибуты, у которых не установлен признак скрытости.
 Пример:


DISPLAYUSERLISTATTR
 = "Наименование: %NAME% (Дата: %USER_DATE_ATTR%)"


В окне «[Параметры
 редактора значений](uinav.chm::/GUI/ValueEditorParameters.htm)» значение данного параметра
 задаётся с помощью параметра «[Пользовательское
 наименование всех уровней](uinav.chm::/GUI/ValueEditorParameters.htm#dimension)».


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

	    Style := Tab.Cell(0, 0).Style;

	    // Создадим и настроим редактор значений в виде раскрывающегося списка

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByUi("DimCombo");

	    DimComboBinding := Binding As IBindingDimCombo;

	    DimComboBinding.Object := "DIMENSIONS";

	    DimComboBinding.DisplayUserListAttr := "%NAME%";

	    Style.Binding := DimComboBinding.AsString;

	    // Сохраним изменения

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в регламентном отчёте
 для ячейки А0 будет задан редактор значений в виде раскрывающегося списка
 справочника с пользовательским наименованием всех уровней справочника
 «%NAME%».


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
