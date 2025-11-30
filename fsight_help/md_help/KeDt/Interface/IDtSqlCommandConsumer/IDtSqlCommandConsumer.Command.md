# IDtSqlCommandConsumer.Command

IDtSqlCommandConsumer.Command
-


# IDtSqlCommandConsumer.Command


## Синтаксис


Command: [ISQLCommand](KeDb.chm::/Interface/ISQLCommand/ISQLCommand.htm);


## Описание


Свойство Command определяет
 команду СУБД репозитория, которая будет обрабатывать экспортируемые данные.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL и команды СУБД с идентификатором SQL_Command, которая
 будет обрабатывать экспортируемые данные.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    EtlTask: IEtlTask;

    EtlConsumer: IEtlPlainDataConsumer;

    SQLComConsumer: IDtSqlCommandConsumer;

    WxConsumer: IWxRectangle;

    WxETLConsumer: IWxETLObject;

Begin

    MB := MetabaseClass.Active;

    // Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

    MObj := MB.ItemById("ETL").Edit;

    EtlTask := MObj As IEtlTask;

    // Начало создания приёмника

    // Создание объекта "Команда СУБД"

    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataSqlCommandConsumer) As IEtlPlainDataConsumer;

    EtlConsumer := EtlConsumer.Edit;

    EtlConsumer.Id := "SQLCom_Consumer";

    EtlConsumer.Name := "Команда СУБД";

    EtlConsumer.Description := "Команда СУБД";

    // Настройка приёмника данных

    SQLComConsumer := EtlConsumer.Consumer As IDtSqlCommandConsumer;

    SQLComConsumer.Command := MB.ItemById("SQL_Command").Bind As ISQLCommand;

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


После выполнения примера в задаче ETL будет создан объект «Команда СУБД».
 Данный приёмник будет экспортировать данные с использованием указанной
 команды СУБД репозитория.


См. также:


[IDtSqlCommandConsumer](IDtSqlCommandConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
