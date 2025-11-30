# DashboardSlidesMove: Операция

DashboardSlidesMove: Операция
-


**


# DashboardSlidesMove


## Синтаксис


bool DashboardSlidesMove(string mon, ItemMoveInfo
 tArg)


## Параметры


mon. Моникёр
 для работы со слайдами информационной панели.


tArg. Параметры перемещения
 слайда.


## Описание


Операция DashboardSlidesMove
 перемещает слайды в информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Slides», а в полях tArg.indexFrom
 и tArg.indexTo индексы позиций
 из которой и в которую осуществляется перемещение слайда. Моникёр может
 быть получен при выполнении операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет логическое значение true,
 если перемещение слайда завершилось успешно.


## Пример


Ниже приведён пример перемещения слайдов в информационной панели. В
 запросе передаётся моникёр для работы со слайдами, позиции из которой
 и в которую перемещается слайд. В ответе возвращается признак успешного
 перемещения слайда.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardSlidesMove xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NPIEIDPOHJAFGOAELKELIPCKGACGDODEJKMKLMAKBEHEPNNL!M!S!PNNJOPHPOHJAFGOAEICILHADAKIJGHMLEMLEPKLENIMMHAMNE!Slides</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <indexFrom>2</indexFrom>  <indexTo>0</indexTo>  </tArg>
  </DashboardSlidesMove>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DashboardSlidesMoveResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DashboardSlidesMoveResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardSlidesMove" :
  {
   "mon" : "NPIEIDPOHJAFGOAELKELIPCKGACGDODEJKMKLMAKBEHEPNNL!M!S!PNNJOPHPOHJAFGOAEICILHADAKIJGHMLEMLEPKLENIMMHAMNE!Slides",
   "tArg" :
    {
     "indexFrom" : "2",
     "indexTo" : "0"
    }
  }
}

### JSON-ответ:


{
 "DashboardSlidesMoveResult" : "1"
}


public static bool DashboardSlidesMove(string moniker, uint fromPosition, uint toPosition)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tMove = new DashboardSlidesMove()
    {
        tArg = new ItemMoveInfo()
        {
            indexFrom = fromPosition,
            indexTo = toPosition
        },
        // Моникёр для работы со слайдами информационной панели
        mon = moniker + "!Slides"
    };
    // Перемещение слайдов
    var result = somClient.DashboardSlidesMove(tMove);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
