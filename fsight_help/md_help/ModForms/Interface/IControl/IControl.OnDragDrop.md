# IControl.OnDragDrop

IControl.OnDragDrop
-


# OnDragDrop


## Синтаксис


OnDragDrop(Sender: Object; Args: [IDragEventArgs](../IDragEventArgs/IDragEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnDragDrop для компонента
 наступает, когда пользователь отпускает над ним перетаскиваемый объект.


## Комментарии


Допускается перетаскивание объектов из других приложений.


## Пример


Приведем пример для компонента «Memo», реализация которого позволяет
 перетаскивать текст из других приложений в компонент «Memo»:


	- Создайте форму;


	- Разместите на форме компонент «Memo» с наименованием «Memo1»
	 (все дальнейшие действия производятся с данным компонентом);


	- Установите для свойства [AllowDrop](IControl.AllowDrop.htm)
	 значение True;


	- Создайте следующий обработчик события [OnDragOver](IControl.OnDragOver.htm)
	 для компонента Memo1:


	Sub Memo1OnDragOver(Sender: Object; Args: IDragEventArgs);

	Begin

	    Args.Effect := DragDropEffects.Copy;

	End Sub Memo1OnDragOver;


	- Создайте следующий обработчик события OnDragDrop:


	Sub Memo1OnDragDrop(Sender: Object; Args: IDragEventArgs);

	Begin

	    Memo1.Text := Args.Data As String;

	End Sub Memo1OnDragDrop;


В результате после запуска формы появится возможность перетаскивать
 текст из других приложений (например, Microsoft Word) в компонент «Memo».


Ограничением данного примера является то, что перетащить можно лишь
 одну строку текста. Для того чтобы была возможность перетащить несколько
 строк текста одновременно, необходимо модифицировать обработчик события
 OnDragDrop следующим образом:


	Sub Memo1OnDragDrop(Sender: Object; Args: IDragEventArgs);

	Var

	    v: Variant;

	    i: Integer;

	    List: IStringList;

	Begin

	    Memo1.Clear;

	    v := Args.Data;

	    If v Is String Then

	        Memo1.Text := v As String;

	    End If;

	    If v Is IStringList Then

	        List := v As IStringList;

	        For i := 0 To List.Count - 1 Do

	            Memo1.Lines.Add(List.Item(i));

	        End For;

	    End If;

	End Sub Memo1OnDragDrop;


После модификации обработчика события OnDragDrop
 становится возможным перетаскивание в компонент «Memo» не только текста,
 но и, например, ярлыков. При перетаскивании ярлыка в компонент «Memo»
 будет помещен путь к файлу, на который ссылается ярлык.


См. также:


[IControl](IControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
