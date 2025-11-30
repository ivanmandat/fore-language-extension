# IBindingDimCombo.DataSourceKeyDefined

IBindingDimCombo.DataSourceKeyDefined
-


# IBindingDimCombo.DataSourceKeyDefined


DataSourceKeyDefined:
 Boolean;


## Описание


Свойство DataSourceKeyDefined
 определяет признак наличия параметра «DS_KEY».


## Комментарии


Если свойству DataSourceKeyDefined
 установлено значение True, то
 в строке связи, описывающей редактор значения, будет присутствовать параметр
 «DS_KEY». Значение данного параметра
 определяет свойство [IBindingDimCombo.DataSourceKey](IBindingDimCombo.DataSourceKey.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT. В первой ячейке отчёта должен отображаться
 [раскрывающийся
 список справочника](UiNav.chm::/GUI/ValueEditorParameters.htm#dimension).


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Tab: ITabSheet;

	    Style: ITabCellStyle;

	    BM: IBindingManager;

	    Binding: IBindingValue;

	    DimComboBinding: IBindingDimCombo;

	    SourceBinding: String;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    // Получим стиль первой ячейки в левом верхнем углу отчёта

	    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

	    Style := Tab.Cell(0, 0).Style;

	    SourceBinding := Style.Binding;

	    // Выведем в консоль значения параметров строки связи

	    BM := New BindingManager.Create;

	    Binding := BM.CreateByValue(SourceBinding);

	    If Binding.UI = "DimCombo" Then

	        DimComboBinding := Binding As IBindingDimCombo;

	        //Проверка наличия параметра GROUP

	        If DimComboBinding.GroupDefined Then

	            Debug.WriteLine("GROUP: " + DimComboBinding.Group);

	        End If;

	        //Проверка наличия параметра SCHEMA

	        If DimComboBinding.SchemaDefined Then

	            Debug.WriteLine("SCHEMA: " + DimComboBinding.Schema);

	        End If;

	        //Проверка наличия параметра CUSTOMMULTISELECTTEXT

	        If DimComboBinding.CustomMultiselectTextDefined Then

	            Debug.WriteLine("CUSTOMMULTISELECTTEXT: " + DimComboBinding.CustomMultiselectText);

	        End If;

	        //Проверка наличия параметра LEVELATTR

	        If DimComboBinding.LevelAttributeDefined Then

	            Debug.WriteLine("LEVELATTR: " + DimComboBinding.LevelAttribute);

	        End If;

	        //Проверка наличия параметра ID

	        If DimComboBinding.ObjectDefined Then

	            Debug.WriteLine("ID: " + DimComboBinding.Object);

	        End If;

	        //Проверка наличия параметра SELECTIONMODE

	        If DimComboBinding.SelectionModeDefined Then

	            Debug.WriteLine("SELECTIONMODE: " + DimComboBinding.SelectionMode.ToString);

	        End If;

	        //Проверка наличия параметра VALUE

	        If DimComboBinding.ValueDefined Then

	            Debug.WriteLine("VALUE: " + DimComboBinding.Value);

	        End If;

	        //Проверка наличия параметра ATTRIBUTEVALUE

	        If DimComboBinding.ValueAttributeDefined Then

	            Debug.WriteLine("ATTRIBUTEVALUE: " + DimComboBinding.ValueAttribute);

	        End If;

	        //Проверка наличия параметра DS_KEY

	        If DimComboBinding.DataSourceKeyDefined Then

	            Debug.WriteLine("DS_KEY: " + DimComboBinding.DataSourceKey.ToString);

	        End If;

	        //Проверка наличия параметра PT_KEY

	        If DimComboBinding.PointKeyDefined Then

	            Debug.WriteLine("PT_KEY: " + DimComboBinding.PointKey.ToString);

	        End If;

	        //Проверка наличия параметра DIM_KEY

	        If DimComboBinding.DimensionKeyDefined Then

	            Debug.WriteLine("DIM_KEY: " + DimComboBinding.DimensionKey.ToString);

	        End If;

	        //Проверка наличия параметра SORTDIRECTION

	        If DimComboBinding.SortDirectionDefined Then

	            Debug.WriteLine("SORTDIRECTION: " + DimComboBinding.SortDirection.ToString);

	        End If;

	        //Проверка наличия параметра DISPLAYUSERLISTATTR

	        If DimComboBinding.DisplayUserListAttrDefined Then

	            Debug.WriteLine("DISPLAYUSERLISTATTR: " + DimComboBinding.SortDirection.ToString);

	        End If;

	        //Проверка наличия параметра DISPLAYUSERTEXTATTR

	        If DimComboBinding.DisplayUserTextAttrDefined Then

	            Debug.WriteLine("DISPLAYUSERTEXTATTR: " + DimComboBinding.SortDirection.ToString);

	        End If;

	        //Проверка наличия параметра STOREASSTRING

	        If DimComboBinding.StoreAsStringDefined Then

	            Debug.WriteLine("STOREASSTRING: " + DimComboBinding.SortDirection.ToString);

	        End If;

	        //Проверка наличия параметра NAMESPACE

	        If DimComboBinding.NamespaceDefined Then

	            Debug.WriteLine("NAMESPACE: " + DimComboBinding.SortDirection.ToString);

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера в консоль будут выведены
 значения параметров строки связи, заданной для формата первой ячейки регламентного
 отчёта в виде раскрывающегося списка справочника.


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
