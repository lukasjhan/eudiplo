import { Test, TestingModule } from '@nestjs/testing';
import { WebhookService } from './webhook.service';
import { describe, beforeEach, it, expect } from 'vitest';

describe('WebhookService', () => {
    let service: WebhookService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [WebhookService],
        }).compile();

        service = module.get<WebhookService>(WebhookService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
