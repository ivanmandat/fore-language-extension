# IBindingDimCombo.ParamValues

IBindingDimCombo.ParamValues
-


# IBindingDimCombo.ParamValues


## Синтаксис


		ParamValues: [IBindingObjectParamValues](../IBindingObjectParamValues/ibindingobjectparamvalues.htm);


## Описание


Свойство ParamValues возвращает
 коллекцию параметров параметрического справочника.


## Комментарии


Для указания значений параметров параметрического справочника в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm) реализованы два способа:


	- PARAMVALUEх, где x -
	 номер параметра, например, PARAMVALUE1 = "10". Нумерация
	 параметров начинается с единицы.


	- PARAMID_ident, где ident
	 - идентификатор параметра, например, PARAMID_Item = "10".


Для задания значений параметров первым способом используйте в коллекции
 свойство [IBindingObjectParamValues.Item](../IBindingObjectParamValues/IBindingObjectParamValues.Item.htm),
 для задания вторым способом - [IBindingObjectParamValues.Value](../IBindingObjectParamValues/IBindingObjectParamValues.Value.htm).


## Пример


					Function CreateDimComboBidningWithParams(Dimension: IMetabaseObjectDescriptor; Paramarray ParamValues: Array Of String): String;

		Var

		    BM: IBindingManager;

		    DimModel: IDimensionModel;

		    DimComboBinding: IBindingDimCombo;

		    Params: IBindingObjectParamValues;

		    i: Integer;

		Begin

		    BM := New BindingManager.Create;

		    DimModel := Dimension.Bind As IDimensionModel;

		    //Настройка параметров редактора

		    DimComboBinding := BM.CreateByUi("DimCombo") As IBindingDimCombo;

		    DimComboBinding.Object := Dimension.Id;

		    Params := DimComboBinding.ParamValues;

		    //Если переданы значения параметров

		    If ParamValues <> Null Then

		        //Если календарный справочник, то параметры задаются через свойство Value

		        //Для всех других видов справочников - через свойство Item

		        If (DimModel Is ICalendarDimension) Then

		            Params.Value("PARAMID_YEAR_START") := ParamValues[0];

		            Params.Value("PARAMID_YEAR_FINISH") := ParamValues[1];

		        Else

		            For i := 1 To ParamValues.Length Do

		                Params.Item(i) := ParamValues[i - 1];

		            End For;

		        End If;

		    End If;

		    Return DimComboBinding.AsString;

		End Function CreateDimComboBidningWithParams;


Данная функция генерирует строку связи для использования редактора значения
 в виде раскрывающегося списка справочника. В качестве входного параметра
 «Dimension» передается описание справочника, в качестве «ParamValues»
 - значения параметров для открытия параметрического справочника. В зависимости
 от типа справочника параметры в строке связи указываются двумя различными
 способами.


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
