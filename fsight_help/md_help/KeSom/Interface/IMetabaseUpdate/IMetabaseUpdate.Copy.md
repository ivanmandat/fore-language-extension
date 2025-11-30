# IMetabaseUpdate.Copy

IMetabaseUpdate.Copy
-


# IMetabaseUpdate.Copy


## Синтаксис


		Copy(Options: [MetabaseUpdateCopyType](../../Enums/MetabaseUpdateCopyType.htm)):
		 [IMetabaseUpdate](IMetabaseUpdate.htm);


## Параметры


Options. Тип копирования обновления.


## Описание


Метод Copy осуществляет копирование
 обновления.


## Комментарии


Метод вызывается только при активации режима разделения ролей администраторов.


## Пример


Для выполнения примера предполагается наличие файла обновления C:\Update.pefx.


Добавьте ссылку на системную сборку Metabase.


		Sub Main;

		Var

		    MB: IMetabase;

		    Update: IMetabaseUpdate;

		Begin

		    MB := MetabaseClass.Active;

		    Update := Mb.CreateUpdate;

		    Update.LoadFromFileNF("D:\Update.pefx");

		    Update.Copy(MetabaseUpdateCopyType.AvailableISA);

		    Update.SaveToFileNF("D:\Update_copy.pefx");

		End Sub Main;


В результате выполнения примера произойдёт сохранение файла как файла
 с данными, доступными только администратору информационной безопасности.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
