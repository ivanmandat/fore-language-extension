# IDataChange.SaveData

IDataChange.SaveData
-


# IDataChange.SaveData


## Синтаксис


SaveData([CallBack: [ICubeCallback](KeCubes.chm::/Interface/ICubeCallback/ICubeCallback.htm)
 = Null]);


## Параметры


CallBack. Объект, осуществляющий
 обработку ошибок, которые могут возникнуть при сохранении данных.


## Описание


Метод SaveData сохраняет измененные
 значения области данных (областей данных) в источник (источники).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента ReportBox
 и компонента UiReport с наименованием
 «UiReport1».


	Class TestForm: Form

	    UiReport1: UiReport;

	    ReportBox1: ReportBox;

	    Button1: Button;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        Report: IPrxReport;

	        Sheet: IPrxSheet;

	        DataChage: IPrxDataChange;

	        Callback: CubeCallback;

	    Begin

	        Report := UiReport1.Instance As IPrxReport;

	        Sheet := Report.ActiveSheet;

	        DataChage := Sheet As IPrxDataChange;

	        If DataChage.IsDataChanged Then

	            Callback := New CubeCallback.Create;

	            DataChage.SaveData(Callback);

	            Callback := Null;

	        End If;

	    End Sub Button1OnClick;


	End Class TestForm;


	Class CubeCallback: Object, ICubeCallback

	    Public Sub OnCallback(Argument: ICubeCallbackArgument);

	    Begin

	        Debug.WriteLine("Ошибка: " + Argument.Error.Message);

	        Debug.WriteLine("Идентификатор ошибки: " + Argument.Error.MessageID.ToString);

	        Debug.WriteLine("Источник: " + Argument.Error.Source);

	        Argument.IgnoreError := True;

	    End Sub OnCallback;


	    Public Function get_Argument: ICubeCallbackArgument;

	    Begin

	        Return Null;

	    End Function get_Argument;

	End Class CubeCallback;


После выполнения примера при нажатии на кнопку будут сохранены измененные
 значения всех областей данных активного листа отчета. Для обработки ошибок,
 которые могут возникнуть при сохранении данных, используется объект пользовательского
 класса CubeCallback. Все возникшие ошибки будут игнорироваться, информация
 о них будет выведена в консоль среды разработки.


См. также:


[IDataChange](IDataChange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
