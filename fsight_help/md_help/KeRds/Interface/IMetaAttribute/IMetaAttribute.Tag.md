# IMetaAttribute.Tag

IMetaAttribute.Tag
-


# IMetaAttribute.Tag


## Синтаксис


Tag: [MetaAttributeTag](../../Enums/MetaAttributeTag.htm);


## Описание


Свойство Tag возвращает вид
 атрибута.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC_DS.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    rub: IRubricator;

	    Ast: IMetaAttributes;

	    att: IMetaAttribute;

	    i, tag: Integer;

	    s: String;

	Begin

	    mb := MetabaseClass.Active;

	    rub := mb.ItemById("FC_DS").Bind As IRubricator;

	    Ast := rub.Facts.Attributes;

	    Debug.WriteLine("Идентификатор атрибута и его вид");

	    For i := 0 To Ast.Count - 1 Do

	        att := Ast.Item(i);

	        s := att.Id + ' ';

	        tag := att.Tag;

	        Select Case tag

	            Case 0: s := s + "- вид не определен";

	            Case 1: s := s + "- ключ";

	            Case 2: s := s + " - номер для множественных значений";

	            Case 3: s := s + " - ключ ревизии";

	            Case 4: s := s + " - фактор";

	            Case 5: s := s + " - уровень календаря";

	            Case 6: s := s + " - дата";

	            Case 7: s := s + " - сценарий";

	            Case 8: s := s + " - единицы измерения";

	            Case 9: s := s + " - значение";

	            Case 10: s := s + " - наименование";

	            Case 11: s := s + " - пользователь";

	            Case 12: s := s + " - объект";

	            Case 13: s := s + " - комментарий";

	            Case 14: s := s + " - идентификатор (мнемоника)";

	            Case 15: s := s + " - ключ дескриптора безопасности";

	            Case 16: s := s + " - признак (метка ревизии)";

	        End Select;

	        Debug.WriteLine(s);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены идентификаторы
 атрибутов базы данных временных рядов и их вид.


См. также:


[IMetaAttribute](IMetaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
