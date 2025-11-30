# IMetabase.CopyObject

IMetabase.CopyObject
-


# IMetabase.CopyObject


## Синтаксис


		CopyObject(Info: [IMetabaseObjectCopyInfo](../IMetabaseObjectCopyInfo/IMetabaseObjectCopyInfo.htm));


## Параметры


Info. Информация
 о копируемом объекте.


## Описание


Метод CopyObject осуществляет
 копирование объекта репозитория в соответствии с информацией, передаваемой
 в параметре Info.


## Комментарии


Копируемый объект указывается в свойстве [Source](../IMetabaseObjectCopyInfo/IMetabaseObjectCopyInfo.Source.htm),
 а папка, в которую осуществляется копирование, указывается в свойстве
 [Destination](../IMetabaseObjectCopyInfo/IMetabaseObjectCopyInfo.Destination.htm) параметра Info.


Остальные свойства параметра Info
 являются необязательными. Если наименование и идентификатор не указаны,
 то они будут сгенерированы автоматически.


## Пример


Для выполнения примера предполагается наличие объекта с идентификатором
 «OBJTEST».


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CInfo: IMetabaseObjectCopyInfo;

		Begin

		    MB := MetabaseClass.Active;

		    CInfo := MB.CreateCopyInfo;

		    CInfo.Id := "OBJTEST_Copy";

		    CInfo.Name := "Копия объекта OBJTEST";

		    CInfo.WithData := True;

		    CInfo.Destination := MB.Root;

		    CInfo.Source := MB.ItemById("OBJTEST");

		    MB.CopyObject(CInfo);

		End Sub UserProc;


После выполнения примера произойдет копирование объекта с идентификатором
 «OBJTEST» в корневой каталог репозитория. Новый объект получит наименование
 «Копия объекта OBJTEST», идентификатор «OBJTEST_Copy» и сохранит данные
 копируемого объекта.


См. также:


[IMetabase](IMetabase.htm) | [IMetabaseObjectCopyInfo](../IMetabaseObjectCopyInfo/IMetabaseObjectCopyInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
