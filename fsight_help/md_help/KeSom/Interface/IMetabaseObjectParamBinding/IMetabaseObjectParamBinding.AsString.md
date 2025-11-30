# IMetabaseObjectParamBinding.AsString

IMetabaseObjectParamBinding.AsString
-


# IMetabaseObjectParamBinding.AsString


## Синтаксис


AsString: String;


## Описание


Свойство AsString определяет
 параметры редактора, который будет использоваться для редактирования значений
 параметра.


## Комментарии


Параметры редактора устанавливаются с помощью строки связи. Для получения
 строки связи используйте свойство [IBindingValue.AsString](ForeSys.chm::/Interface/IBindingValue/IBindingValue.AsString.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «OBJTEST».


			Sub CreateObjectParam;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Param: IMetabaseObjectParam;

    BM: IBindingManager;

    IntegerEditBinding: IBindingIntegerEdit;

Begin

    Mb := MetabaseClass.Active;

    MObj := Mb.ItemById("OBJTEST").Edit;

    Param := MObj.Params.Add;

    Param.DataType := DbDataType.String;

    //Настройка редактора значений

    BM := New BindingManager.Create;

    IntegerEditBinding := BM.CreateByUi("IntegerEdit") As IBindingIntegerEdit;

    IntegerEditBinding.MinValue := -100;

    IntegerEditBinding.MaxValue := +100;

    IntegerEditBinding.Value := 0;

    Param.Binding.AsString := IntegerEditBinding.AsString;

    MObj.Save;

End Sub CreateObjectParam;


При выполнении примера для объекта будет создан новый параметр. Для
 параметра будет настроен редактор значений: для задания значения будет
 использоваться редактор целочисленных значений, диапазон допустимых значений
 - [-100; 100], значение по умолчанию - «0».


См. также:


[IMetabaseObjectParamBinding](IMetabaseObjectParamBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
