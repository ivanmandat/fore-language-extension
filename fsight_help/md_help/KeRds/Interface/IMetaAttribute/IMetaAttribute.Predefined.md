# IMetaAttribute.Predefined

IMetaAttribute.Predefined
-


# IMetaAttribute.Predefined


## Синтаксис


Predefined: Boolean;


## Описание


Свойство Predefined возвращает
 признак того, является ли данный атрибут системным.


## Комментарии


Свойство возвращает значение True,
 если атрибут системный, и False,
 если атрибут пользовательский.


## Комментарии


Для старых версий системных справочников базы данных временных рядов
 данное свойство может возвращать некорректный результат. Для получения
 корректных данных перед использованием свойства Predefined
 следует вызвать метод [IRubricator.AlterAndSave](KeCubes.chm::/Interface/IRubricator/IRubricator.AlterAndSave.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    Rubr: IRubricator;

	    Attributes: IMetaAttributes;

	    Attr: IMetaAttribute;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    RubDesc := MB.ItemById("OBJ_FC");

	    Rubr := RubDesc.Bind As IRubricator;

	    Attributes := Rubr.Facts.Attributes;

	    For i := 0 To Attributes.Count - 1 Do

	        Attr := Attributes.Item(i);

	        If Attr.Predefined Then

	            Debug.WriteLine("Атрибут '" + Attr.Name + "' системный");

	        Else

	            Debug.WriteLine("Атрибут '" + Attr.Name + "' пользовательский");

	        End If;

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация об
 атрибутах показателей в базе данных временных рядов.


См. также:


[IMetaAttribute](IMetaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
