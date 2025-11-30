# TermEdit.TermsChanged

TermEdit.TermsChanged
-


# TermEdit.TermsChanged


## Синтаксис


TermsChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие TermsChanged наступает
 при изменении текста терма из редактора.


## Пример


Для выполнения примера [создайте
 компонент TermEdit](../../../Components/TermEdit/Example_TermEdit.htm) с наименованием «termEdit». Добавим функцию - обработчик
 события TermsChanged:


termEdit.TermsChanged.add(function (sender, args)
 {


   alert ("Term was changed")


});


После выполнения примера при изменении текста терма из редактора на
 экран будет выведено сообщение с текстом «Term was changed».


См. также:


[TermEdit](TermEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
