# IBindingDimCombo.DataSourceKey

IBindingDimCombo.DataSourceKey
-


# IBindingDimCombo.DataSourceKey


## Синтаксис


DataSourceKey: Integer;


## Описание


Свойство DataSourceKey определяет
 значение параметра «DS_KEY» в
 [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «DS_KEY» определяет
 ключ источника данных регламентного отчета, для которого созданы вычисляемые
 точки.


Свойство DataSourceKey задается
 в комбинации со свойствами [IBindingDimCombo.DimensionKey](IBindingDimCombo.DimensionKey.htm)
 и [IBindingDimCombo.PointKey](IBindingDimCombo.PointKey.htm).


Свойство DataSourceKey доступно
 для использования, если свойству [IBindingDimCombo.DataSourceKeyDefined](ibindingdimcombo.datasourcekeydefined.htm)
 установлено значение True. При
 изменении свойства DataSourceKey
 свойству [IBindingDimCombo.DataSourceKeyDefined](ibindingdimcombo.datasourcekeydefined.htm)
 автоматически устанавливается значение True.


## Пример


	Function CreateDimComboBidningForDataSource(DataSource: IPrxDataSource; DimensionId: String): String;

	Var

	    BM: IBindingManager;

	    Point: IPrxCalculatedPoint;

	    DimComboBinding: IBindingDimCombo;

	Begin

	    BM := New BindingManager.Create;

	    If DataSource.Points.Count <> 0 Then

	        Point := DataSource.Points.Item(0);

	        //Настройка параметров

	        DimComboBinding := BM.CreateByUi("DimCombo") As IBindingDimCombo;

	        DimComboBinding.DataSourceKey := DataSource.Key;

	        DimComboBinding.PointKey := Point.Key;

	        DimComboBinding.DimensionKey := Point.SelectionSet.FindById(DimensionId).Dimension.Key;

	        DimComboBinding.SelectionMode := SelectionModeEnum.SingleSelect;

	        Return DimComboBinding.AsString;

	    Else

	        Return "";

	    End If;

	End Function CreateDimComboBidningForDataSource;


Данная функция генерирует строку связи для использования редактора значения
 в виде раскрывающегося списка справочника. Редактор настраивается на указанное
 измерение первый вычисляемой точки источника данных. Источник данных и
 идентификатор измерения передаются в качестве входных параметров.


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
