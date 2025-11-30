# ITreeControl.OnSearch

ITreeControl.OnSearch
-


# ITreeControl.OnSearch


## Синтаксис


OnSearch(Sender: Object; Args: [ITreeSearchNodeEventArgs](../ITreeSearchNodeEventArgs/ITreeSearchNodeEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnSearch наступает после
 окончания поиска элементов в компоненте.


## Комментарии


Данное событие наступает для каждого найденного элемента. Используя
 свойство [Show](../ITreeSearchNodeEventArgs/ITreeSearchNodeEventArgs.Show.htm)
 можно управлять переходом к найденному элементу. Если свойству [Show](../ITreeSearchNodeEventArgs/ITreeSearchNodeEventArgs.Show.htm)
 установить значение False, то
 элемент пропускается и переход осуществляется к следующему найденному
 элементу, для которого также будет сгенерировано свое событие OnSearch.


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на ней компонента TreeList. Для компонента установлены обработчики событий
 поиска элементов OnBeginSearch и OnSearch.


	Class TESTForm: Form

	    TreeList1: TreeList;


	    Sub TreeList1OnBeginSearch(Sender: Object; Args: ITreeSearchEventArgs);

	    Begin

	        Debug.WriteLine("Поиск по тексту: " + Args.SearchText);

	    End Sub TreeList1OnBeginSearch;


	    Sub TreeList1OnSearch(Sender: Object; Args: ITreeSearchNodeEventArgs);

	    Begin

	        If Args.Node.Text.IndexOf("Old") <> -1 Then

	            Args.Show := False;

	        End If;

	    End Sub TreeList1OnSearch;

	End Class TESTForm;


Текст, по которому будут искаться элементы, будет выведен в консоль
 среды разработки. Если элемент в своем наименовании содержит текст Old,
 то такие элементы будут пропускаться и поиск будет переходить к следующим
 элементам.


См. также:


[ITreeControl](ITreeControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
