# IRdsDictionaryBox.CanCopy

IRdsDictionaryBox.CanCopy
-


# IRdsDictionaryBox.CanCopy


## Синтаксис


CanCopy: Boolean;


## Описание


Метод CanCopy возвращает
 признак доступности копирования элемента в буфер обмена.


## Комментарии


Допустимые значения:


	- True. Копирование элемента
	 доступно. Для выполнения копирования используйте метод [IRdsDictionaryBox.Copy](IRdsDictionaryBox.Copy.htm);


	- False. Копирование элемента
	 недоступно.


## Пример


Для выполнения примера предполагается наличие формы, содержащей:


	- компонент RdsDictionaryBox
	 с идентификатором RdsDictionaryBox1;


	- компонент UiRdsDictionary с
	 загруженным справочником НСИ, являющимся источником данных для RdsDictionaryBox1.


			Sub CopyPaste;

Begin

    If RdsDictionaryBox1.CanCopy Then

        RdsDictionaryBox1.Copy;

    End If;

    RdsDictionaryBox1.FocusedElement := -2;

    If RdsDictionaryBox1.CanPaste Then

        RdsDictionaryBox1.Paste;

    End If;

End Sub CopyPaste;


Результат выполнения примера: будет выполнена попытка копирования элемента
 в буфер обмена и его последующая вставка.


См. также:


[IRdsDictionaryBox](IRdsDictionaryBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
