# TermEdit.insertData

TermEdit.insertData
-


# TermEdit.insertData


## Синтаксис


insertData(data: PP.Ui.[Term](../Term/Term.htm)
 || Array, index: Number, isUpdateContent: Boolean, fireEvent: Boolean);


## Параметры


data. Терм или массив термов,
 описанных в виде объекта, строки или объекта класса PP.Ui.[Term](../Term/Term.htm);


index. Позиция элемента, после
 которого необходимо произвести вставку;


isUpdateContent. Признак обновления
 содержимого редактора термов после вставки. Если для параметра установлено
 значение true, то редактор термов
 будет обновлен. По умолчанию значение параметра true;


fireEvent. Признак вызова события
 [TermEdit.TermsChanged](TermEdit.TermsChanged.htm). Если для
 параметра установлено значение true,
 то будет вызвано событие [TermEdit.TermsChanged](TermEdit.TermsChanged.htm).


## Описание


Метод insertData добавляет терм
 или массив термов в редактор термов.


## Пример


Пример использования метода приведен в описании события [Term.BecameEmpty](../Term/Term.BecameEmpty.htm).


См. также:


[TermEdit](TermEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
