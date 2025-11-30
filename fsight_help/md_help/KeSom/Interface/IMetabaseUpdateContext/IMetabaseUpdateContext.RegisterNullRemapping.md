# IMetabaseUpdateContext.RegisterNullRemapping

IMetabaseUpdateContext.RegisterNullRemapping
-


# IMetabaseUpdateContext.RegisterNullRemapping


## Синтаксис


RegisterNullRemapping(OldKey: Integer);


## Параметры


OldKey. Ключ объекта.


## Описание


Метод RegisterNullRemapping
 определяет объекты создаваемые с использованием нулевого повторного сопоставления.


## Комментарии


Метод используется для создания объектов с частичной потерей структуры
 (информации), в случае, если разрешаются не все ссылки на внешние объекты.


## Пример


Для выполнения примера предполагается наличие файла обновления «C:\Update.pefx»
 и наличие в обновлении объекта с ключом «1286399».


Добавьте ссылку на системную сборку «Metabase».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

   MB: IMetabase;

    Update: IMetabaseUpdate;

    UpdateCxt: IMetabaseUpdateContext;

Begin

    MB := MetabaseClass.Active;

    Update := Mb.CreateUpdate;

    Update.LoadFromFileNF("C:\Update.pefx");

    UpdateCxt := Update.CreateUpdateContext;

    UpdateCxt.RegisterNullRemapping(1286399);

    Update.ApplyEx(Null, UpdateCxt);

End Sub Button1OnClick;


После выполнения примера будет осуществлена настройка объекта с нулевым
 повторным сопоставлением.


См. также:


[IMetabaseUpdateContext](IMetabaseUpdateContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
