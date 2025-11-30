# IMetabaseObjectControlInfo.GetObjectControlIsEmpty

IMetabaseObjectControlInfo.GetObjectControlIsEmpty
-


# IMetabaseObjectControlInfo.GetObjectControlIsEmpty


## Синтаксис


GetObjectControlIsEmpty(ObjectKey: Integer): Boolean;


## Параметры


ObjectKey. Ключ вложенного
 объекта.


## Описание


Метод GetObjectControlIsEmpty
 возвращает признак отсутствия настроек по управлению параметрами указанного
 объекта.


## Комментарии


Допустимые значения:


	- True. Для указанного
	 объекта не настроено управление параметрами;


	- False. Для указанного
	 объекта настроено управление параметрами.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 STD_CUBE. Данный куб имеет в своей структуре измерение, которое построено
 на параметрическом справочнике «COUNTRY». Добавьте ссылку на системную
 сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    ControlInfo: IMetabaseObjectControlInfo;

    ControlEmpty: Boolean;

Begin

    MB := MetabaseClass.Active;

    MObj := Mb.ItemById("STD_CUBE").Edit;

    ControlInfo := MObj.Params.ControlInfo;

    ControlEmpty := ControlInfo.GetObjectControlIsEmpty(MB.GetObjectKeyById("COUNTRY"));

    Debug.WriteLine(ControlEmpty);

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведено значение
 True, если в кубе управление параметрами для справочника «COUNTRY» не
 настроено и False, если настроено.


См. также:


[IMetabaseObjectControlInfo](IMetabaseObjectControlInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
