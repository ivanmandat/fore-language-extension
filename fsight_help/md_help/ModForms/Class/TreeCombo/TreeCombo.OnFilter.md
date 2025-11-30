# TreeCombo.OnFilter

TreeCombo.OnFilter
-


# TreeCombo.OnFilter


## Синтаксис


OnFilter(Sender: Object; Args: [ITreeSearchNodeEventArgs](../../Interface/ITreeSearchNodeEventArgs/ITreeSearchNodeEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnFilter наступает после
 окончания фильтрации списка элементов.


## Комментарии


Данное событие наступает для каждого найденного элемента, который в
 итоге попадает в отфильтрованный список элементов. Используя свойство
 [Show](../../Interface/ITreeSearchNodeEventArgs/ITreeSearchNodeEventArgs.Show.htm)
 можно управлять отображением элемента в отфильтрованном списке.


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на ней компонента TreeCombo. Для компонента установлены обработчики событий
 поиска элементов OnBeginFilter и OnFilter.


	Class TESTForm: Form

	    TreeCombo1: TreeCombo;


	    Sub TreeCombo1OnBeginFilter(Sender: Object; Args: ITreeSearchEventArgs);

	    Begin

	        Debug.WriteLine("Фильтрация по тексту: " + Args.SearchText);

	    End Sub TreeCombo1OnBeginFilter;


	    Sub TreeCombo1OnFilter(Sender: Object; Args: ITreeSearchNodeEventArgs);

	    Begin

	        If Args.Node.Text.IndexOf("Old") <> -1 Then

	            Args.Show := False;

	        End If;

	    End Sub TreeCombo1OnFilter;

	End Class TESTForm;


Если компонент находится в фокусе, его список закрыт и осуществляется
 набор символов, то происходит фильтрация списка элементов. Текст, по которому
 будет происходить фильтрация, будет выведен в консоль среды разработки.
 Если элемент в своем наименовании содержит текст «Old», то такие элементы
 будут скрыты из конечного списка. После фильтрации полученный список элементов
 будет отображен.


См. также:


[TreeCombo](TreeCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
