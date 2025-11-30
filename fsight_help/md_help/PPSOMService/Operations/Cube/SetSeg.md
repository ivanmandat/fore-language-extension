# SetSeg: Операция

SetSeg: Операция
-


**


# SetSeg


## Синтаксис


SetSegResult SetSeg(SegId tSeg, SetSegArg tArg)


## Параметры


tSeg. Моникёр
 экземпляра сегмента куба.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetSeg изменяет метаданные
 сегмента куба.


## Комментарии


Для выполнения операции укажите в поле tAlg
 моникёр экземпляра сегмента, в поле tArg.pattern
 шаблон, в соответствии с которым будут изменяться метаданные, а в поле
 tArg.meta устанавливаемые метаданные.
 Также можно определить шаблон tArg.metaGet
 для получения метаданных после их изменения. Моникёр может быть получен
 при выполнении операции [OpenSeg](OpenSeg.htm).


Для сохранения изменений используйте операцию [SaveObject](../Repository/SaveObject.htm).


Результатом работы операции будут обновлённые метаданные, если было
 определено поле tArg.metaGet.


## Пример


Ниже приведён пример изменения активности сегмента куба. В запросе передаётся
 моникёр открытого экземпляра сегмента и устанавливаемое значение активности.
 В ответе возвращаются обновлённая информация об установленном значении
 активности сегмента.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetSeg xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tSeg xmlns="****">
  <id>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNOKHLMBOCLDPFOAECLPBNGOGGLICIMAEJIEMIFKOCDIBJKCM</id>  </tSeg>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <active>true</active>  </pattern>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<data>
  <active>false</active>  </data>
  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <active>true</active>  </metaGet>
  </tArg>
  </SetSeg>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetSegResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNOKHLMBOCLDPFOAECLPBNGOGGLICIMAEJIEMIFKOCDIBJKCM</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**5**" hf="**0**">
  <i>OBJ317192</i>  <n>Сегмент куба</n>  <k>317192</k>  <c>1295</c>  <p>317162</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<data>
  <active>0</active>  </data>
  </meta>
  </SetSegResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetSeg" :
  {
   "tSeg" :
    {
     "id" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNOKHLMBOCLDPFOAECLPBNGOGGLICIMAEJIEMIFKOCDIBJKCM"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "active" : "true"
      },
     "meta" :
      {
       "data" :
        {
         "active" : "false"
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "active" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetSegResult" :
  {
   "id" :
    {
     "id" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNOKHLMBOCLDPFOAECLPBNGOGGLICIMAEJIEMIFKOCDIBJKCM"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "5",
         "@hf" : "0",
         "i" : "OBJ317192",
         "n" : "Сегмент куба",
         "k" : "317192",
         "c" : "1295",
         "p" : "317162",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "data" :
      {
       "active" : "0"
      }
    }
  }
}


public static SetSegResult SetSeg(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetSeg()
    {
        tArg = new SetSegArg()
        {
            pattern = new SegMdPattern()
            {
                active = true
            },
            meta = new SegMd()
            {
                data = new SegData()
                {
                    active = false
                }
            },
            metaGet = new SegMdPattern()
            {
                active = true
            }
        },
        tSeg = new SegId() { id = moniker }
    };
    // Изменение настроек сегмента куба
    var result = somClient.SetSeg(tSet);
    return result;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
