# IDtUserConsumer.ForeClass

IDtUserConsumer.ForeClass
-


# IDtUserConsumer.ForeClass


## Синтаксис


ForeClass: String;


## Описание


Свойство ForeClass определяет
 наименование класса, реализующего приёмник пользователя.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и модуля ModuleConsumer, содержащего класс MyConsumer,
 реализующий приёмник пользователя. Данный приёмник рассчитан на работу
 с массивом, содержащим символьные и вещественные значения.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlConsumer: IEtlPlainDataConsumer;

    UserConsumer: IDtUserConsumer;

    WxConsumer: IWxRectangle;

    WxETLConsumer: IWxETLObject;

    Fields: IDtFieldDefinitions;

    Field: IDtFieldDefinition;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания приёмника

    // Создание объекта "Приёмник пользователя"

    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataUserConsumer) As IEtlPlainDataConsumer;

    EtlConsumer := EtlConsumer.Edit;

    EtlConsumer.Id := "User_Consumer";

    EtlConsumer.Name := "Приёмник пользователя";

    EtlConsumer.Description := "Приёмник пользователя";

    // Настройка приёмника данных

    UserConsumer := EtlConsumer.Consumer As IDtUserConsumer;

    UserConsumer.ForeModule := MB.ItemById("ModuleConsumer").Bind;

    UserConsumer.ForeClass := "MyConsumer";

    Fields := UserConsumer.Fields;

    Field := Fields.Add;

    Field.DataType := DbDataType.String;

    Field.Name := "Код";

    Field := Fields.Add;

    Field.DataType := DbDataType.Float;

    Field.Name := "Значение";

    EtlConsumer.FillDefault;

    // Сохраняем приёмник

    EtlConsumer.Save;

    // Конец создания приёмника

    // Начало создания визуального объекта

    WxConsumer := EtlTask.Workspace.CreateRectangle;

    WxETLConsumer := New WxETLObject.Create;

    WxETLConsumer.ETLObject := EtlConsumer;

    WxConsumer.Style.TextPosition := WxTextPosition.Bottom;

    WxConsumer.Style.PictureMarginTop := -10;

    WxConsumer.PinPosition := New GxPointF.Create(50, 50);

    WxConsumer.Extension := WxETLConsumer As IWxShapeExtension;

    // Конец создания визуального объекта

    // Сохранение задачи Etl

    MObj.Save;

End Sub UserProc;


После выполнения примера в задаче ETL будет создан объект «Приёмник
 пользователя». Данный приёмник будет экспортировать данные в соответствии
 с алгоритмом пользователя, реализованным в переопределенном методе Put
 в классе MyConsumer.


См. также:


[IDtUserConsumer](IDtUserConsumer.htm) | [IDtRecordsetConsumer.Put](../IDtRecordsetConsumer/IDtRecordsetConsumer.Put.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
