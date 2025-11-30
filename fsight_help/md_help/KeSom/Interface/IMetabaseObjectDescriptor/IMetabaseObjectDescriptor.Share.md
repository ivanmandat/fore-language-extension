# IMetabaseObjectDescriptor.Share

IMetabaseObjectDescriptor.Share
-


# IMetabaseObjectDescriptor.Share


## Синтаксис


		Share;


## Описание


Метод Share помещает объект
 в систему управления версиями.


## Комментарии


При вызове данного метода на экран будет выведено окно первой публикации
 объекта в системе управления версиями.


Окно публикации будет выведено при соблюдении следующих условий:


	- объект [еще
	 не помещен](IMetabaseObjectDescriptor.IsShared.htm) в систему управления версиями;


	- для помещаемого объекта свойство [IMetabaseObjectDescriptor.IsSharingSupported](IMetabaseObjectDescriptor.IsSharingSupported.htm)
	 возвращает значение True.


Если хотя бы одно условие не соблюдено, то вызов метода не дает никакого
 результата.


## Пример


В примере описана функция «ShareObject».


Добавьте ссылку на системную сборку Metabase.


					Function ShareObject(Descriptor: IMetabaseObjectDescriptor): Boolean;

		Begin

		    If Descriptor.IsSharingSupported And (Not Descriptor.IsShared) Then

		        Descriptor.Share;

		        Return True;

		    Else

		        Return False;

		    End If;

		End Function ShareObject;


Данная функция осуществляет проверку возможности добавления объекта
 в систему управления версиями. При соблюдении необходимых условий объект
 будет помещен в систему управления версиями, и функция вернет значение
 True. Описание объекта передается
 в параметре Descriptor.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
