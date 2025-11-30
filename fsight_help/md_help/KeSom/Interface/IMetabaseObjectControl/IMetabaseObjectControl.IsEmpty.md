# IMetabaseObjectControl.IsEmpty

IMetabaseObjectControl.IsEmpty
-


# IMetabaseObjectControl.IsEmpty


## Синтаксис


IsEmpty: Boolean;


## Описание


Свойство IsEmpty возвращает
 признак отсутствия настроек по управлению параметрами вложенного объекта.


## Комментарии


Свойство возвращает одно из следующих значений:


	- True. Для объекта не
	 настроено управление параметрами.


	- False. Для объекта настроено
	 управление параметрами.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «STD_CUBE». Данный куб имеет в своей структуре измерение, которое построено
 на параметрическом справочнике «COUNTRY».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    ControlInfo: IMetabaseObjectControlInfo;

    Empty: Boolean;

Begin

    MB := MetabaseClass.Active;

    MObj := Mb.ItemById("STD_CUBE").Bind;

    ControlInfo := MObj.Params.ControlInfo;

    Empty := ControlInfo.FindByKey(MB.GetObjectKeyById("COUNTRY")).IsEmpty;

    Debug.WriteLine(Empty);

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведено значение
 True, если в кубе управление параметрами для справочника «COUNTRY» не
 настроено и False, если настроено.


См. также:


[IMetabaseObjectControl](IMetabaseObjectControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
