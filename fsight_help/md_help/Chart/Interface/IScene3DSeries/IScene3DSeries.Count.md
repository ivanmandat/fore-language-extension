# IScene3DSeries.Count

IScene3DSeries.Count
-


# IScene3DSeries.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 рядов сцены.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D
 и компонента ListBox.


	Sub User;

	Var

	    serie : IScene3DSerie;

	    i : integer;

	Begin

	    ListBox1.Items.Clear;

	    For i := 0 To s.Series.Count - 1 Do

	        serie := s.Series.Item(i);

	        ListBox1.Items.Add("Serie" + i.ToString + "; Key=" + serie.Key.ToString + "; Type=" + Serie.Type.ToString);

	    End For;

	End Sub User;


После выполнения примера в компонент будут выведены параметры всех имеющихся
 рядов универсальной коллекции.


См. также:


[IScene3DSeries](IScene3DSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
