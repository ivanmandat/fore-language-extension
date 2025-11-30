# IAdhocDimSyncIndex.ControlledBy

IAdhocDimSyncIndex.ControlledBy
-


# IAdhocDimSyncIndex.ControlledBy


## Синтаксис


ControlledBy: [IMetabaseObjectParam](KeSom.chm::/Interface/IMetabaseObjectParam/IMetabaseObjectParam.htm);


## Описание


Свойство ControlledBy
 определяет параметр, который управляет индексом синхронизации.


## Комментарии


С помощью данного свойства можно задать значения синхронизируемых измерений,
 с которыми будет выполняться открытие отчета.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD_PARAM». В данной панели должна быть
 настроена синхронизация только одного измерения. Синхронизируемое измерение
 должно содержать атрибут «KEY».


			Sub UserProc;

Var

    mb: IMetabase;

    Obj: IMetabaseObject;

    Adhoc: IAdhocReport;

    Sync: IAdhocSynchronization;

    Dims: IAdhocDimsSynchronization;

    DimIndex: IAdhocDimSyncIndex;

    Params: IMetabaseObjectParams;

    Param: IMetabaseObjectParam;

    BM: IBindingManager;

    DimCombo: IBindingDimCombo;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    Obj := mb.ItemById("DASHBOARD_PARAM").Edit;

    Adhoc := Obj As IAdhocReport;

    // Получаем коллекцию параметров аналитической панели

    Params := Obj.Params;

    // Очищаем коллекцию параметров

    Params.Clear;

    // Получаем данные о синхронизации измерений

    Sync := Adhoc.Synchronization;

    // Получаем коллекцию синхронизируемых измерений

    Dims := Sync.Dimensions;

    // Получаем первое синхронизируемое измерение

    DimIndex := Dims.Item(0);

    // Создаём новый параметр

    Param := Params.Add;

    // Указываем тип параметра

    Param.DataType := DbDataType.Integer;

    // Настраиваем редактор значений параметра

    BM := New BindingManager.Create;

    // Указываем, что это будет раскрывающийся список справочника

    DimCombo := BM.CreateByUi("DimCombo") As IBindingDimCombo;

    // Указываем идентификатор справочника, которым будет управлять параметр

    DimCombo.ObjectDefined := True;

    DimCombo.Object := DimIndex.Selection.Dimension.Ident;

    // Указываем атрибут справочника, управляющий значением

    DimCombo.ValueAttributeDefined := True;

    DimCombo.ValueAttribute := "KEY";

    // Устанавливаем для параметра настроенный редактор значений

    Param.Binding.AsString := DimCombo.AsString;

    // Указываем, что синхронизируемым измерением управляет созданный параметр

    DimIndex.ControlledBy := Param;

    // Сохраняем изменения

    Obj.Save;

End Sub UserProc;


В результате выполнения примера при открытии аналитической панели надо
 будет задать значение параметра, управляющего синхронизацией измерений.


См. также:


[IAdhocDimSyncIndex](IAdhocDimSyncIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
