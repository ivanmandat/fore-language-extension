# CloseSegCont: Операция

CloseSegCont: Операция
-


**


# CloseSegCont


## Синтаксис


bool CloseSegCont(SegContId tSegCont)


## Параметры


tSegCont. Моникёр
 экземпляра контейнера сегментов.


## Описание


Операция CloseSegCont закрывает
 экземпляр контейнера сегментов.


## Комментарии


Для выполнения операции укажите в поле tSegCont
 моникёр экземпляра контейнера сегментов. Моникёр может быть получен при
 выполнении операции [OpenSegCont](OpenSegCont.htm).


Результатом операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


Ниже приведён пример закрытия контейнера сегментов. В запросе передается
 моникёр открытого экземпляра контейнера сегментов. В ответе приходит признак
 удачного закрытия.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseSegCont xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tSegCont xmlns="****">
  <id>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNIKPLJBOCLDPFOAEJGOHDKFEFEEPOCLEFIAOPAACCEOBKNOG</id>  </tSegCont>
  </CloseSegCont>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseSegContResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseSegContResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseSegCont" :
  {
   "tSegCont" :
    {
     "id" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNIKPLJBOCLDPFOAEJGOHDKFEFEEPOCLEFIAOPAACCEOBKNOG"
    }
  }
}

### JSON-ответ:


{
 "CloseSegContResult" : "1"
}


public static bool CloseSegCont(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tClose = new CloseSegCont()
    {
        tSegCont = new SegContId() { id = moniker }
    };
    // Закрытие экземпляра контейнера сегментов
    var b = somClient.CloseSegCont(tClose);
    return b;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
