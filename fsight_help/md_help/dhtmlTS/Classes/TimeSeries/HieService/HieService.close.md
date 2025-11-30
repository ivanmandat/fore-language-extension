# HieService.close

HieService.close
-


# HieService.close


## Синтаксис


close (hie, callback);


## Параметры


hie. Задает объект иерархии;


callback. Задает обработчик окончания выполнения операции.


## Описание


Метод close закрывает объект иерархии.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами (см. «[HieService.getChildEls](HieService.getChildEls.htm)») и в обработчике события открытия документа добавить следующий код:


	console.log("Закрываем объект иерархии");
	hie = res.Args.Hier;
	var klose = hieSrv.close(hie, PP.Delegate(onClose, this));
	console.log(klose);
	function onClose(sender, res) {
	    console.log(sender);
	    console.log(res);
	}
	var els = hieSrv.close();
	console.log(els);

После выполнения примера объект иерархии будет закрыт, а в консоль браузера будет выведено сообщение:


Закрываем объект иерархии


PP.TS.HieService {_Metabase: PP.Mb.Metabase, _UseMbQueueRqts: true, _Events: Object, MetadataChanged: PP.Delegate, MetadataChangeStart: PP.Delegate…}


См. также:


[HieService](HieService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
