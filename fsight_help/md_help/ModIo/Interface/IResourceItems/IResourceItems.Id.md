# IResourceItems.Id

IResourceItems.Id
-


# IResourceItems.Id


## Синтаксис


Id(Key: Integer): String;


## Параметры


Key. Ключ объекта.


## Описание


Свойство Id определяет идентификатор
 объекта с указанным ключом.


## Комментарии


Для задания ключа объекта используйте свойство [IResourceItems.Key](IResourceItems.Key.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие ресурсов
 с идентификатором «APP_RESOURCE», содержащих строковый элемент с идентификатором
 «Button1». В данных ресурсах язык по умолчанию - русский, а язык
 перевода - английский.


Добавьте ссылки на системные сборки: IO, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Resource: IResourceObject;

    ResStrs: IResourceStrings;

    StrKey: Integer;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем ресурсы

    Resource := mb.ItemById("APP_RESOURCE").Edit As IResourceObject;

    // Получаем строковые элементы для языка по умолчанию

    ResStrs := Resource.Strings;

    // Получаем ключ строкового элемента ресурсов

    StrKey := ResStrs.FindById("Button1");

    // Если элемент найден, то изменяем его идентификатор

    If StrKey <> -1 Then

        ResStrs.Id(StrKey) := "BntCancel";

    End If;

    // Сохраняем изменения

    (Resource As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера идентификатор строкового элемента «Button1»
 будет изменен на «BntCancel».


См. также:


[IResourceItems](IResourceItems.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
