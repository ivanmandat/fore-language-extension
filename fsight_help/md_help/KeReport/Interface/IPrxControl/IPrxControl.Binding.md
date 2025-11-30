# IPrxControl.Binding

IPrxControl.Binding
-


# IPrxControl.Binding


## Синтаксис


Binding: String;


## Описание


Свойство Binding определяет
 параметры редактора, который будет использоваться для редактирования значений
 элемента управления.


## Комментарии


Параметры редактора устанавливаются с помощью строки связи. Для получения
 строки связи используйте свойство [IBindingValue.AsString](ForeSys.chm::/Interface/IBindingValue/IBindingValue.AsString.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «Report». В регламентном отчете создан минимум
 один элемент управления.


			Sub EditPrxControl;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Control: IPrxControl;

    BM: IBindingManager;

    IntegerEditBinding: IBindingIntegerEdit;

Begin

    Mb := MetabaseClass.Active;

    Report := MB.ItemById("Report").Edit As IPrxReport;

    Control := Report.Controls.Item(0);

    //Настройка редактора значений

    BM := New BindingManager.Create;

    IntegerEditBinding := BM.CreateByUi("IntegerEdit") As IBindingIntegerEdit;

    IntegerEditBinding.MinValue := -100;

    IntegerEditBinding.MaxValue := 100;

    IntegerEditBinding.Value := 0;

    Control.Binding := IntegerEditBinding.AsString;

    (Report As IMetabaseObject).Save;

End Sub EditPrxControl;


При выполнении примера для элемента управления регламентного отчета
 будут настроены параметры редактора значений: для задания значения будет
 использоваться редактор целочисленных значений, диапазон допустимых значений
 - [-100; 100], значение по умолчанию - «0».


См. также:


[IPrxControl](IPrxControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
